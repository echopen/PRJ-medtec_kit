#!/usr/bin/python3
#encoding: UTF-8


import re
import string
import sys

DOC_EXT={}
DOC_EXT["txt"]  = "md|txt|rst" #"|htm|html|latex"
DOC_EXT["doc"]  = "doc|docx|odt|fodt|pdf|rtf|ps|ebook|odg|fodg" #""
DOC_EXT["img"]  = "gif|tif|png|jpg|jpeg|bmp|svg" #""
DOC_EXT["vid"]  = "mp3|mp4|mpg|mpeg|avi" #""
DOC_EXT["slide"]= "ppt|pptx|odp|fodp" #""
DOC_EXT["data"] = "csv|xls|xlsx|ods|fods" #"xml|"
MD_EXT  = "md"
CSV_EXT = "csv"

#-------------------------------------------------------------------------------
def debug(lbl, val):
  """
     Print debug message.
     /!\ sys.stdout.buffer.write() is used to support UTF-8
  """
  # print(">>> DEBUG "+lbl+" : "+str(val))
  s = ">>> DEBUG "+lbl+" : "+str(val)
  sys.stdout.buffer.write(s.encode('utf8'))

#-------------------------------------------------------------------------------
def debug_error():
  """
     Print last error message. 
  """
  print("### ERROR : "+str(sys.exc_info()))

#-------------------------------------------------------------------------------
def first(a):
  """
     Return first item of a else None. 
  """
  return a[0] if a else None

#-------------------------------------------------------------------------------
def first_str(a):
  """
     Return first str of a else "". 
  """
  return str(a[0]) if a else ""

#-------------------------------------------------------------------------------
def sanitize(txt):
  """
     Remove redoundant and non signifiants spaces from txt.
  """
  txt = re.sub(r"\s+", " ", txt).strip()
  return txt

#-------------------------------------------------------------------------------
def fill(tpl, **kwargs):
  """
     fill tpl with kwargs values.
  """
  
  return string.Template(tpl).substitute(kwargs)

