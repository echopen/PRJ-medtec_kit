#!/usr/bin/python3
#encoding: UTF-8

import shutil
import re
import lxml.etree as ET
import lib as LIB
import xml_helper as XML
import file_parser as PRS
import html_helper as HTM
import sys
import itertools

ROOT_DIR = "../../"
EXCEPT_RE = "(^doc/doc_builder|^doc/www/|^doc/www_landing/|^trash/|/trash/)" # "^$" for no except

WWW_ROOT_DIR = "../www/"
GITHUB_URL = "https://github.com/echopen/PRJ-medtec_kit/tree/master/"
 
#-------------------------------------------------------------------------------
def __parse_all_files(root_dir, except_re):
  """
     . 
  """
  doc_names = PRS.collection(root_dir)
  all_docs = ET.Element('all', {"root_dir":root_dir})
  r = re.compile(except_re)
  for dn in itertools.filterfalse(r.match, doc_names):
    print("Reading file : " + dn)
    doc_content = PRS.doc(root_dir, dn)
    all_docs.append(doc_content)

  all_docs = PRS.register_attachments(all_docs)
  return all_docs

#-------------------------------------------------------------------------------
def __build_one_site(root_dir, all_docs, domain_refs, doc_entry_ref, www_root_dir, site_name, github_url, user_group):
  """
     Build one autonomous static web site centered on doc_entry_ref and restricted
     on domain_refs which is a set of authorized entities.
     Allowed user_groups: #public, #devs, #core_team, #admin
  """
  www_build_dir = www_root_dir + site_name + "/"

  print("Reset build directory : " + www_build_dir)
  shutil.rmtree(www_build_dir, ignore_errors=True)
  try:
    shutil.copytree("src/default_www/", www_build_dir)
  except:                                         # strange behaviour on Windows, try again ...
    shutil.copytree("src/default_www/", www_build_dir)
  
  all_domain_cats = { XML.xpath_plain(all_docs, ".//*[@ref='"+itm_ref+"']/@cat") for itm_ref in domain_refs } - {""}
  
  domain_cats = []
  for cat_ref in all_domain_cats:
    cat_restrict = XML.xpath_plain(all_docs, ".//*[@ref='"+cat_ref+"']/@restricted_to")
    if (cat_restrict == "") or (user_group in cat_restrict):
      domain_cats += [cat_ref]
  with_errors = user_group in "#devs,#admin"    
  path = HTM.store_home_page(www_build_dir, all_docs, "", root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors)

  for cat_ref in domain_cats:
    try:
      path = HTM.store_index_page(www_build_dir, all_docs, cat_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors)
    except:
      LIB.debug_error()
      LIB.debug("### Error for category index : ", cat_ref)

  for itm_ref in domain_refs:
    cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+itm_ref+"']/@cat")
    if (cat_ref in domain_cats):
      try:
        path = HTM.store_content_page(www_build_dir+cat_ref+"/", all_docs, itm_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors)
      except:
        LIB.debug_error()
        LIB.debug("### Error for file : ", itm)

  path = HTM.store_glossary_page(www_build_dir, all_docs, "", root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors)

  if with_errors:
    path = HTM.store_error_page(www_build_dir, all_docs, "", root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors)

  
#===============================================================================
if __name__ == "__main__":
  print("Static web site builder start : ")

  all_docs = __parse_all_files(ROOT_DIR, EXCEPT_RE)
  
  print("Found categories : " + str([e.text.strip() for e in all_docs.findall(".//category/title")]))
  
  # slot 1 : partial site centered on CFG-sweeping_probe ----------------------
  doc_entry_ref = "CFG-aquarium_kit" 
  domain_refs = XML.extend_to_connected(all_docs, {"CFG-aquarium_kit", "CFG-arduino_servo", "CFG-sweeping_probe"})
  __build_one_site(ROOT_DIR, all_docs, domain_refs, doc_entry_ref, WWW_ROOT_DIR, "slot1", GITHUB_URL, "#public")
  
  # slot 1 : full site --------------------------------------------------------
  # doc_entry_ref = "ROOT-echopen" 
  # domain_refs = set(XML.xpath_list(all_docs, ".//@ref")) #/!\ contains also CAT-xxxxx
  # __build_one_site(ROOT_DIR, all_docs, domain_refs, doc_entry_ref, WWW_ROOT_DIR, "slot1", GITHUB_URL, "#admin")
  
  # slot 3 : partial site centered on PRJ-medtec_androidapp ----------------------
  # doc_entry_ref = "PRJ-medtec_androidapp" 
  # domain_refs = XML.extend_to_connected(all_docs, {doc_entry_ref})
  # __build_one_site(ROOT_DIR, all_docs, domain_refs, doc_entry_ref, WWW_ROOT_DIR, "slot3", GITHUB_URL, "#public")
  

  # main index
  # HTM.store_slots_index_page(WWW_ROOT_DIR, ( ("slot1", "www/slot1 : full documentation for echopen asso administrators.")
                                            # , ("slot2", "www/slot2 : documentation restricted to CFG-sweeping_probe for echopen.org public web site.")
                                            # ))
                                            

  #backup _all_docs_index.xml for debug ----------------------------------------
  ET.ElementTree(all_docs).write(WWW_ROOT_DIR+"/_all_docs_index.xml", encoding="UTF-8", )
