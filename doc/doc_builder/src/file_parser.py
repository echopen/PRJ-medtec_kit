#!/usr/bin/python3
#encoding: UTF-8

import os
import os.path
import codecs
import re
import csv
import lxml.etree as ET
import lib as LIB
import xml_helper as XML
import yaml

#-------------------------------------------------------------------------------
def __extract_node_name(txt):
  """
     Return txt with only lowercase and any non alphanumerical caracters replaced
     by '_'. Stop at first '@'.
  """
  txt = re.sub(r"@.*$", "", txt)
  txt = LIB.sanitize(txt).lower()
  txt = re.sub(r"\W+", "_", txt)
  txt = "_"+txt if re.match("^\d",txt) else txt
  return txt

#-------------------------------------------------------------------------------
def __is_valid_name(txt):
  """
     Return if a str is a valid name matching ^[a-zA-Z_][a-zA-Z0-9_\-]*$.
  """
  return re.match("^[a-zA-Z_][a-zA-Z0-9_\-]*$", txt)

#-------------------------------------------------------------------------------
def __extract_attributes(txt):
  """
     Return a dictionary of attributes from '@key=value' patterns in txt.
  """
  txt = re.sub(r"^[^@]*", "", txt).strip("@")
  groups = txt.split("@")
  groups = [LIB.sanitize(a).lower() for a in groups]
  key_vals = [(g.split("=")+[""])[0:2] for g in groups if __is_valid_name(g.split("=")[0])]
  attribs= dict(key_vals)
  return attribs

#-------------------------------------------------------------------------------
def __extract_ref(txt):
  """
     Extract reference (ex: ABC-abcd_efg...) part from txt.
  """
  try:
    return re.search(r"([A-Z]{2,6}[_-][\w_-]+)", txt).group(1)
  except:
    return ""

#-------------------------------------------------------------------------------
def __extract_image(txt):
  """
     Extract image file name (ex: ![VIEWME](viewme.jpg) ...) part from txt.
  """
  try:
    return re.search(r"!\[.*\] *\(([^)]*)\)", txt).group(1)
  except:
    return ""

#-------------------------------------------------------------------------------
def __md_parse(xml_doc, text):
  """
     Return the DOM from multiline markdown text. Headers (#..., ##..., ###...) 
     are interpreted as nodes name and the following text as the content of
     these nodes.
     /!\ plusieurs noeuds de même nom au même niveau ???
  """
  lines = text.splitlines()
  context = xml_doc
  if LIB.sanitize(lines[0]) == "---" :      # Markdown with yaml meta-data block
    yaml_block = ""
    for i in range(1, len(lines)):
      if LIB.sanitize(lines[i]) == "---" : break
      yaml_block += lines[i] + "\n"
    meta_dict = yaml.load(yaml_block)
    XML.add_dict_as_xml(context,meta_dict)
    raw_content_text = ""
    for j in range(i+1, len(lines)):
      raw_content_text += lines[j] + "\n"
    node_raw = ET.SubElement(context, "raw_content")
    node_raw.text = str(raw_content_text)

  else:                                                    # Structured Markdown
    cur_level = 0
    code_fence_on = False
    for i in range(len(lines)):
      line = lines[i]
      match_code_fence = re.match(r"^ *```", line)
      if match_code_fence : code_fence_on = not code_fence_on 
      match_title = re.match(r"^ *(#+)(.+)", line)
      if match_title and not code_fence_on:
        new_level = len(match_title.group(1))
        node_txt = match_title.group(2)
        node_name = __extract_node_name(node_txt)
        attributes = __extract_attributes(node_txt)
        if new_level > cur_level + 1:
          meta = XML.xpath_node(xml_doc, ".//_meta")
          XML.add_error(meta, "__md_parse()", "fatal", "md_level_mismatch", "level mismatch", i, line)
        else:
          for lev in range(new_level, cur_level+1): context = context.getparent()
          context = ET.SubElement(context, node_name, attributes)
          cur_level=new_level
      else:
        context.text = (context.text if context.text else "") + line + "\n"

    node_raw = ET.SubElement(xml_doc, "raw_content")
    node_raw.text = text
  
  return xml_doc

#-------------------------------------------------------------------------------
def __csv_parse(xml_doc, text):
  """
     Return the DOM from csv text. Headers (#..., ##..., ###...) 
     are interpreted as nodes name and the columns text as the content of
     these nodes.
  """
  lines = text.splitlines()
  reader = csv.reader(lines)
  l = -1
  for row in reader:
    l += 1
    if (l==0):
      header = row
    elif (header[0].startswith("#")):
      context = xml_doc
      cur_level = 0
      for i in range(len(header)):
        ttl = header[i]
        txt = row[i]
        match_title = re.match(r" *(#+)(.+)", ttl)
        if match_title:
          new_level = len(match_title.group(1))
          node_txt = match_title.group(2)
          node_name = __extract_node_name(node_txt)
          attributes = __extract_attributes(node_txt)
          if new_level > cur_level + 1:
            meta = XML.xpath_node(xml_doc, ".//_meta")
            XML.add_error(meta, "__csv_parse()", "fatal", "csv_level_mismatch", "level mismatch", i, li)
          else:
            for lev in range(new_level, cur_level+1): context = context.getparent()
            context = ET.SubElement(context, node_name, attributes)
            cur_level=new_level
        
          context.text = txt 
    else:
      # not an error, not parsable as structured csv
      #XML.add_error(meta, "__csv_parse()", "info", "csv_not_parsable", "not parsable header csv file", 0, header)
      xml_doc.text = text
      break
      
  return xml_doc

#-------------------------------------------------------------------------------
def __bin_parse(xml_doc, text):
  """
     Return the DOM from binary file. No parsing of the content.
  """
      
  return xml_doc

#-------------------------------------------------------------------------------
def collection(root_dir):
  """
     Return recursively all filenames matching pattern from root_dir.
  """  
  ext_fltr = re.compile("^[^.].*\.("+ "|".join(LIB.DOC_EXT.values()) +")$", re.I)
  ret=[]
  for root, dirs, files in os.walk(root_dir):
    for filename in filter(ext_fltr.match, files):
      full_path = os.path.join(root, filename)
      rel_path = os.path.relpath(full_path, start=root_dir)
      rel_path = rel_path.replace("\\", "/")
      ret += [rel_path]
  return ret

#-------------------------------------------------------------------------------
def doc(root_dir, name):
  """
     Parse a Markdown or CSV document file and return DOM.
  """
  full_path = os.path.join(root_dir, name)
  input_file = codecs.open(full_path, mode="r", encoding="utf-8")

  dir, file = os.path.split(name)
  forget, ext = os.path.splitext(name)
  ext = ext[1:].lower()
  xml_doc = ET.Element('document', {"path":name, "dir":dir, "file":file, "ext":ext})
  meta = ET.SubElement(xml_doc, "_meta")
  
  if (ext==LIB.CSV_EXT):
    try:
      dom = __csv_parse(xml_doc, input_file.read())
    except:
      dom = __bin_parse(xml_doc, None)

  elif (ext==LIB.MD_EXT):
    #try:
      dom = __md_parse(xml_doc, input_file.read())
    #except:
      dom = __bin_parse(xml_doc, None)

  else: # other parsed as binary
    dom = __bin_parse(xml_doc, None)
    
  #build @ref, @title, @icon, @cat attributes
  for root_node in XML.xpath_list(dom, "*[name][not(@is_template)]"):
    ref = __extract_ref(XML.xpath_plain(root_node, "name/text()"))
    if (ref > ""):
      title = LIB.sanitize(XML.xpath_plain(root_node, "title/text()"))
      icon = __extract_image(XML.xpath_plain(root_node, "text()"))
      cat = "CAT-" + root_node.tag
      root_node.set("ref", ref)
      root_node.set("title", title)
      root_node.set("icon", icon)
      root_node.set("cat", cat)
      #find all distinct ref patterns
      text = " ".join(root_node.xpath(".//text()"))
      ext_refs = set(re.findall('\[`([A-Z]{2,6}-[\w_]+)`\]', text))
      for ext_ref in ext_refs:
        if (ext_ref != ref):
          XML.add_external_ref(meta, ext_ref, ref)

    else:
      XML.add_error(meta, "doc()", "warning", "ref_error", "document reference syntax error", 0, ref )

  return dom

#-------------------------------------------------------------------------------
def register_attachments(all_docs):
  """
     register any attached "binary" document to its master document. Based on the file path
  """

  attachments = XML.xpath_list(all_docs, "//document[count(*) <= 1]")
  for att in attachments:
    att_dir = XML.xpath_plain(att, "@dir")
    att_path = XML.xpath_plain(att, "@path")
    att_name = XML.xpath_plain(att, "@file")
    att_ext = XML.xpath_plain(att, "@ext")								# vvvv Not very smart, but it's late and it works ....  vvvv
    root_pathes = XML.xpath_list(all_docs, "//document[count(*) > 1][@file='readme.md' or @file='Readme.md' or @file='README.md' or @file='readme.MD' or @file='Readme.MD' or @file='README.MD'][starts-with('"+ att_dir +"', @dir)]/@path")
    max_root_path = max(root_pathes, key=len, default="")
    meta = XML.xpath_node(all_docs, "//document[@path='"+max_root_path+"']/_meta")
    XML.add_attachment(meta, att_path, att_ext, att_name)
    
  return all_docs