#!/usr/bin/python3
#encoding: UTF-8


import lxml.etree as ET
import markdown as MD
import lib as LIB

#-------------------------------------------------------------------------------
def xpath_list(from_node, xpath):
  """
     Return all nodes matching xpath from from_node as dom node list. 
  """
  if isinstance(from_node, ET._Element):
    ret = from_node.xpath(xpath)
  else:
    ret=[]
    
  return ret

#-------------------------------------------------------------------------------
def xpath_num_sorted(from_node, xpath, xp_key):
  """
     Return all nodes matching xpath from from_node as dom node list num sorted
     on xp_key xpath (relative to each item). 
  """
  all = xpath_list(from_node, xpath)
  all_sorted = sorted(all, key=lambda itm: xpath_int(itm, xp_key))
  return all_sorted

#-------------------------------------------------------------------------------
def xpath_alpha_sorted(from_node, xpath, xp_key):
  """
     Return all nodes matching xpath from from_node as dom node list alpha sorted
     on xp_key xpath (relative to each item). 
  """
  all = xpath_list(from_node, xpath)
  all_sorted = sorted(all, key=lambda itm: xpath_plain(itm, xp_key))
  return all_sorted

#-------------------------------------------------------------------------------
def xpath_node(from_node, xpath):
  """
     Return first node matching xpath from from_node as dom node. 
  """
  return LIB.first(xpath_list(from_node, xpath))

#-------------------------------------------------------------------------------
def xpath_plain(from_node, xpath):
  """
     Return first node matching xpath from from_node as plain text. 
  """
  return LIB.first_str(xpath_list(from_node, xpath))

#-------------------------------------------------------------------------------
def xpath_int(from_node, xpath):
  """
     Return first node matching xpath from from_node as integer. 
  """
  return int(LIB.first_str(xpath_list(from_node, xpath)))

#-------------------------------------------------------------------------------
def xpath_md(from_node, xpath):
  """
     Return first node matching xpath from from_node as markdown translated to HTML.
     /!\ just for simple paragraphs (no images, no extern refs...)
  """
  return MD.markdown(LIB.first_str(xpath_list(from_node, xpath)))

#-------------------------------------------------------------------------------
def add_error(meta, fct, errlevel, errno, errmsg, line, text):
  """
     Add new error to meta node of an XML document.
  """
  if (meta is not None):
    err_node = ET.SubElement(meta, "error", {"fct":fct, "errlevel":errlevel, "errno":errno, "errmsg":errmsg, "line":str(line)})
    err_node.text = str(text)
    ret = err_node

  else:
    ret = None
    
  return ret

#-------------------------------------------------------------------------------
def add_external_ref(meta, ext_ref, from_ref):
  """
     Add new external_ref to meta node of an XML document.
  """
  if (meta is not None):
    ext_node = ET.SubElement(meta, "external", {"to_ref":ext_ref, "from_ref":from_ref})
    ret = ext_node

  else:
    ret = None
    
  return ret

#-------------------------------------------------------------------------------
def add_attachment(meta, to_path, ext, file):
  """
     Add new attachment to meta node of an XML document.
  """
  ret=None
  if (meta is not None):
    if len(xpath_list(meta,"attachment[@to_path='"+to_path+"']"))==0:
      att_node = ET.SubElement(meta, "attachment", {"to_path":to_path, "ext":ext, "file":file})
      ret = att_node

  return ret

#-------------------------------------------------------------------------------
def extend_to_connected(all_docs, ref_set):
  """
     Collect all connected references at any level.
  """
  new_ref_set = set() | ref_set
  for ref in ref_set:
    to_refs = xpath_list(all_docs, ".//external[@from_ref='"+ref+"']/@to_ref")
    new_ref_set |= set(to_refs)
    #from_refs = xpath_list(all_docs, ".//_meta/external[@to_ref='"+ref+"']/@from_ref")
    #new_ref_set |= set(from_refs)
  
  if (len(new_ref_set) != len(ref_set)):
    new_ref_set = extend_to_connected(all_docs, new_ref_set)
  
  return new_ref_set

#-------------------------------------------------------------------------------
def add_dict_as_xml(parent, a_dict):
  """
     Add to parent all nodes corresponding to tree structure contained in dict. 
  """
  ret=parent
  if (parent is not None):
    for name0, value in a_dict.items():
      name = name0.lower()
      if isinstance(value, str) :     #simple string
        new = ET.SubElement(parent, name).text=value
        
      elif isinstance(value, list) :  #array
        for v in value:
          new = ET.SubElement(parent, name).text=v
          
      elif isinstance(value, dict) :  #dictionnary
        new = ET.SubElement(parent, name)
        add_dict_as_xml(new, value)
        
      else :
        new = ET.SubElement(parent, name)
    
  return ret
