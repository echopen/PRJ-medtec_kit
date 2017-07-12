#!/usr/bin/python3
#encoding: UTF-8

import sys
import codecs
import os.path
import re
import shutil
import datetime
import lxml.etree as ET
import markdown as MD
import lib as LIB
import xml_helper as XML

#-------------------------------------------------------------------------------
def __comment_html(html):
  """
     Enclose HTML fragment with comments. 
  """
  fct_name=sys._getframe(1).f_code.co_name
  ret = f"""
<!-- BEGIN: {fct_name}() -->
{html}
<!-- END: {fct_name}() -->
    """
  
  return ret

#-------------------------------------------------------------------------------
def __to_github(github_url, src_path):
  """
     Return Github url for src_path file or directory.
  """
  #src_path = re.sub(r"^([A-Z]{2,6}-[\w_]+/)", "\\1tree/master/", src_path)
  # (TODO) Quick and very dirty modif to allow submodules like
  # https://github.com/echOpenHQ/ROOT-echopen/tree/master/TPC-medtec/_PRJ-medtec-kit
  # replace with https://github.com/echOpenHQ/PRJ-medtec-kit/tree/master/
  src_url = os.path.dirname(github_url + src_path)
  src_url = re.sub(r"ROOT-echopen/tree/master/([A-Z]{2,6}-[\w_]+/)_([A-Z]{2,6}-[\w_]+)", "\\2/tree/master", src_url)
  return src_url
 
#-------------------------------------------------------------------------------
def __build_menu(base_url, all_docs, cur_ref, domain_cats):
  """
     Build an HTML menu part for ref entity in all_docs. 
  """
  sorted_cats =  XML.xpath_num_sorted(all_docs, "//category", "menu/@position")
  menu_items =  ""
  for cat in sorted_cats:
    cat_ref =  XML.xpath_plain(cat, "@ref")
    if (not (cat_ref in domain_cats)) : continue
    cat_menu = XML.xpath_plain(cat, "menu/text()")
    is_active = ' class="active"'  if cat_ref==cur_ref else ""
    menu_items += f"""
      <li{is_active}><a class="Menu" href='{base_url}{cat_ref}/index.html'>{cat_menu}</a></li>
      """
    
  ret = f"""
    <ul class="Menu">
      {menu_items}
    </ul>
    """
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_empty_menu():
  """
     Build an HTML empty menu placeholder. 
  """
  menu_items=""
  ret = f"""
    <nav class="navbar navbar-default col-md-2">
      <ul class="nav nav-stacked" >
        {menu_items}
      </ul>
    </nav>
    """
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_ref_link(base_url, all_docs, ref):
  """
     Build an HTML link for ref entity. 
  """
  
  try:
    itm = XML.xpath_node(all_docs, ".//*[@ref='"+ref+"']")
    cat_ref = "CAT-" + itm.tag
    url = base_url + cat_ref + "/" + ref + "/content.html"
    title = XML.xpath_plain(itm, "@title")
    
  except:
    url=""
    title="Not found"
    
  ret = f"""
    <a href="{url}" title="{title}"><code>{ref}</code></a>
    """
  return ret

#-------------------------------------------------------------------------------
def __update_refs(base_url, all_docs, text, node, domain_cats):
  """
     Replace all Markdown link pattern [`CAT-xxxxxx`](../../interfaces/ITF-A_gnd) ) with correct url relative to base_url. 
  """
  #find all distinct ref patterns
  refs = re.findall('\[`([A-Z]{2,6}-[\w_]+)`\]', text)
  for ref in refs:
    try:
      itm = XML.xpath_node(all_docs, ".//*[@ref='"+ref+"']")
      cat_ref = "CAT-" + itm.tag
      if cat_ref in domain_cats:
        url = base_url + cat_ref + "/" + ref + "/content.html"
      else:
        url=""
      ttl = XML.xpath_plain(itm, "@title")
      md_link = f"""[`{ref}`]({url} "{ttl}")"""
      text = re.sub("\[`" + ref + "`\] *(\([^)]*\)|)", md_link, text)
    except:
      meta = XML.xpath_node(node, "ancestor::document/_meta")
      XML.add_error(meta, "__update_refs()", "warning", "unknown_ref", "unknown reference", 0, ref)
      
  return text

#-------------------------------------------------------------------------------
def __build_index_errors_section(base_url, all_docs, github_url):
  """
     Build an HTML section for errors in all_docs. 
  """
  docs = XML.xpath_list(all_docs, "//document")
  nb_docs = len(docs)
  docs_error = XML.xpath_list(all_docs, "//document[_meta/error]")
  nb_docs_error = len(docs_error)
  rows = ""
  for doc_err in docs_error:
    src_path = os.path.join(XML.xpath_plain(doc_err, "@dir"), XML.xpath_plain(doc_err, "@file"))
    src_url = __to_github(github_url, src_path)
    all_errors = XML.xpath_list(doc_err, "_meta/error")
    rows += f"""
      <tr>
        <th colspan="6">{src_path} (<a href="{src_url}" target="_blank">Github</a>)</th>
      </tr>
      """

    for err in all_errors:
      fct =      XML.xpath_plain(err, "@fct")
      errlevel = XML.xpath_plain(err, "@errlevel")
      errno =    XML.xpath_plain(err, "@errno")
      errmsg =   XML.xpath_plain(err, "@errmsg")
      line =     XML.xpath_plain(err, "@line")
      text =     XML.xpath_plain(err, "text()")
      levelclass = {"fatal":"danger", "warning":"warning", "info":"info"}[errlevel]
      rows += f"""
        <tr class="{levelclass}">
          <td>{errlevel}</td>
          <td>{errno}</td>
          <td>{errmsg}</td>
          <td>{line}</td>
          <td>{text}</td>
          <td>{fct}</td>
        </tr>
        """
  
  ret = f"""
    <div class="MenuContent">
      <div id="primary">
        <section class="comonSection singlefoliodetails">
          <div class="container-fluid">
            <div class="col-lg-12 noPadding">							
              <section class="col-md-10">
                <div class="sectionTitle smTitle">
                  <h2>Generation report</h2>
                  <div class="titleBar"></div>
                </div>
                <h3>Overview</h3>
                <table class="table table-bordered">
                  <tr>
                    <th></th>
                    <th>With errors</th>
                    <th>Total</th>
                  </tr>
                  <tr>
                    <th>Parsed documents</th>
                    <td>{nb_docs_error}</td>
                    <td>{nb_docs}</td>
                  </tr>
                </table>
                <h3>Error index</h3>
                <p>List all errors found during static site generation.</p>
                <table class="table table-bordered">
                <tr>
                  <th>errlevel</th>
                  <th>errno</th>
                  <th>errmsg</th>
                  <th>line</th>
                  <th>text</th>
                  <th>fct</th>
                </tr>
                  {rows}
                </table>
              </section>
            </div>
          </div>
        </section>    
      </div>
    </div>
    """
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_glossary_section(base_url, all_docs, github_url, domain_cats, domain_refs):
  """
     Build an HTML section for glossary 
  """
  all_cats = XML.xpath_list(all_docs, "//category")
  cat_links={}
  for cat in all_cats:
    cat_ref =   XML.xpath_plain(cat, "@ref")
    if (not(cat_ref in domain_cats)) : continue
    cat_title = XML.xpath_plain(cat, "@title")
    cat_about =  XML.xpath_plain(cat, "about/text()")
    cat_links[cat_ref] = f"""
      <a href='{base_url}{cat_ref}/index.html' title="{cat_about}">{cat_title}</a>
      """

  sorted_items = XML.xpath_alpha_sorted(all_docs, "//*[@ref]", "@title")
  rows=""
  for itm in sorted_items:
    itm_ref =       XML.xpath_plain(itm, "@ref")
    if (not(itm_ref in domain_refs)) : continue
    itm_title =     XML.xpath_plain(itm, "@title")
    itm_about_html = XML.xpath_md(itm, "about/text()")
    link_ref = __build_ref_link(base_url, all_docs, itm_ref)
    cat_ref = "CAT-" + itm.tag
    cat_link = cat_links.get(cat_ref,"")
    rows += f"""
      <tr>
        <td>{itm_title}</td>
        <td>{cat_link}</td>
        <td>{itm_about_html}</td>
        <td>{link_ref}</td>
      </tr>
      """

    
  ret = f"""
    <div class="MenuContent">
      <div id="primary">
        <section class="comonSection singlefoliodetails">
          <div class="container-fluid">
            <div class="col-lg-12 noPadding">							
              <section class="col-md-10">
                <div class="sectionTitle smTitle">
                  <h2>Glossary</h2>
                  <div class="titleBar"></div>
                </div>
                <p>Alphabetical list ist all terms used in echOpen project.</p>
                <table class="table table-bordered">
                  <tr>
                    <th>Term</th>
                    <th>Category</th>
                    <th>About</th>
                    <th>Symbol</th>
                  </tr>
                  {rows}
                </table>
              </section>
            </div>
          </div>
        </section>    
      </div>
    </div>
    """
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_index_section(base_url, all_docs, cat_ref, github_url, domain_refs):
  """
     Build an HTML section for ref entity in all_docs. 
  """
  cat = XML.xpath_node(all_docs, (".//*[@ref='"+cat_ref+"']"))
  cat_title =     XML.xpath_plain(cat, "title/text()")
  cat_about_html = XML.xpath_md(cat, "about/text()")
  
  all_items = XML.xpath_list(all_docs, ".//*[@cat='"+cat_ref+"']")
  rows = ""
  for itm in all_items:
    itm_ref       = XML.xpath_plain(itm, "@ref")
    if (not (itm_ref in domain_refs)) : continue
    itm_icon      = XML.xpath_plain(itm, "@icon")
    doc           = XML.xpath_node(itm, "ancestor::document")
    itm_src_path  = os.path.join(XML.xpath_plain(doc, "@dir"), XML.xpath_plain(doc, "@file"))
    itm_ttl_html  = XML.xpath_md(itm, "@title")
    itm_about_html = XML.xpath_md(itm, "about/text()")
    itm_src_url = __to_github(github_url, itm_src_path)
    link_ref = __build_ref_link(base_url, all_docs, itm_ref)
    rows += f"""
      <tr>
        <td class="icon"><img class="icon" alt="[icon]" src='{itm_ref}/{itm_icon}'/></td>
        <td>{link_ref}</td>
        <td>{itm_ttl_html}</td>
        <td>(<a href="{itm_src_url}" target="_blank">Github</a>)</td>
      </tr>\n
      """
  
  ret = f"""
    <div class="MenuContent">
      <div id="primary">
        <section class="comonSection singlefoliodetails">
          <div class="container-fluid">
            <div class="col-lg-12 noPadding">							
              <section class="col-md-10">
                <div class="sectionTitle smTitle">
                  <h2>{cat_title} index</h2>
                  <div class="titleBar"></div>
                </div>
                <p>{cat_about_html}</p>
                <table class="table table-bordered">
                  {rows}
                </table>
              </section>
            </div>
          </div>
        </section>    
      </div>
    </div>
  """
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_content_text(base_url, all_docs, node, github_url, domain_cats):
  """
    Build an HTML text
	/!\ Links to refs broken by Markdown transformation NEED to replace refs in md with good
	links BEFORE transformation.
  """
  raw_content = "" #### XML.xpath_plain(node, "../raw_content/text()")
  if raw_content > "" :
    ref      = XML.xpath_plain(node, "@ref")
    doc      = XML.xpath_node(node, "ancestor::document")
    src_path = os.path.join(XML.xpath_plain(doc, "@dir"), XML.xpath_plain(doc, "@file"))
    src_url  = __to_github(github_url, src_path)
    github   = f"""<a href="{src_url}" target="_blank">Github</a>"""
    md_html  = MD.markdown(raw_content)
    ret      = f"""
    <div class="sectionTitle smTitle">
      <h6>{ref} ({github})</h6>
      <div class="titleBar"></div>
    </div>
    {md_html}
    """

  else:
    ret = __build_content_chapter(base_url, all_docs, 2, node, github_url, domain_cats)
    
  return ret
  
#-------------------------------------------------------------------------------
def __build_content_chapter(base_url, all_docs, level, node, github_url, domain_cats):
  """
     Build recursively an HTML chapter at level for given node.
     
     TODO : if level 2 produce :
      <div class="sectionTitle smTitle">
         <h2>configuration</h2>
         <h6>CFG-sweeping_probe (<a href="https://github.com/Olivierff/PRJ-medtec_kit//tree/master/configurations/CFG-sweeping_probe" target="_blank">Github</a>)</h6>
         <div class="titleBar"></div>
      </div>

  """
  try:
    children = XML.xpath_list(node, "node()")
    children_html = ""
    for child in children:
      if (ET.iselement(child)):
        children_html += __build_content_chapter(base_url, all_docs, level+1, child, github_url, domain_cats)
      else:
        child = __update_refs(base_url, all_docs, child, node, domain_cats)
        children_html += MD.markdown(child)

    title = node.tag
    if (level==2):
      ref =      XML.xpath_plain(node, "@ref")
      doc       = XML.xpath_node(node, "ancestor::document")
      src_path  = os.path.join(XML.xpath_plain(doc, "@dir"), XML.xpath_plain(doc, "@file"))
      src_url = __to_github(github_url, src_path)
      github = f"""<a href="{src_url}" target="_blank">Github</a>"""
      ret = f"""
      <div class="sectionTitle smTitle">
        <h2>{title}</h2>
        <h6>{ref} ({github})</h6>
        <div class="titleBar"></div>
      </div>
	  {children_html}
      """

    else:
      ret = f"""
        <h{level}>{title}</h{level}>
        {children_html}
      """
  
  except:
    ret = """
      <p><strong>Error here !!! </strong></p>
    """
  
  return ret

#-------------------------------------------------------------------------------
def __build_content_gallery(base_url, all_docs, item):
  """
     Build an HTML image gallery for given ref. 
  """
  try:
    root_doc = XML.xpath_node(item, "ancestor::document")
    root_dir = XML.xpath_plain(root_doc, "@dir")
    exts = LIB.DOC_EXT["img"]
    images = XML.xpath_list(root_doc, "_meta/attachment[contains('"+exts+"', @ext)]")
    inner_html = ""
    for image in images:
      img_path = XML.xpath_plain(image, "@to_path")
      img_file = XML.xpath_plain(image, "@file")
      rel_path = os.path.relpath(img_path, start=root_dir)
      link = f"""
        <span class="icon"><a title="{img_file}" href="{rel_path}"><img alt="[image]" src="{rel_path}"/></a></span>
        """
      inner_html += link
    
    ret = f"""
      <h2>Image gallery</h2>
      <p>{inner_html}</p>
    """ if inner_html > "" else ""
    
  except:
    ret = ""
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_content_attachments(base_url, all_docs, item):
  """
     Build an HTML attached documents list for given ref. 
  """
  try:
    root_doc = XML.xpath_node(item, "ancestor::document")
    root_dir = XML.xpath_plain(root_doc, "@dir")
    exts = "|".join([LIB.DOC_EXT[t] for t in ["txt","doc","slide","data"]])
    attachments = XML.xpath_list(root_doc, "_meta/attachment[contains('"+exts+"', @ext)]")
    inner_html = ""
    for att in attachments:
      att_path = XML.xpath_plain(att, "@to_path")
      att_title = XML.xpath_plain(att, "@file")
      att_ext = XML.xpath_plain(att, "@ext")
      rel_path = os.path.relpath(att_path, start=root_dir)
      link = f"""
        <a title="{att_title}" href='{rel_path}' target="_blank" class="link_for_{att_ext}">{att_title}</a>&nbsp;&nbsp;&nbsp;
        """
      inner_html += link
    
    ret = f"""
      <h2>Attached documents</h2>
      <p>{inner_html}</p>
    """ if inner_html > "" else ""
    
  except:
    ret = ""
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_content_crossref(base_url, all_docs, ref, domain_refs):
  """
     Build an HTML cross_ref for given ref. 
  """
  try:
    callers = set(XML.xpath_list(all_docs, ".//_meta/external[@to_ref='"+ref+"']/@from_ref"))
    inner_html = ""
    for caller_ref in callers:
      if (not(caller_ref in domain_refs)) : continue
      inner_html += __build_ref_link(base_url, all_docs, caller_ref) + " "

    ret = f"""
      <h2>Referenced by</h2>
      <p>{inner_html}</p>
    """ if inner_html > "" else ""
  
  except:
    ret = ""
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_content_section(base_url, all_docs, ref, github_url, domain_cats, domain_refs):
  """
     Build an HTML section for ref entity in all_docs. 
  """
  try:
    item = XML.xpath_node(all_docs, ".//*[@ref='"+ref+"']")
    content     = __build_content_text(base_url, all_docs, item, github_url, domain_cats)
    gallery     = __build_content_gallery(base_url, all_docs, item)
    attachments = __build_content_attachments(base_url, all_docs, item)
    crossref    = __build_content_crossref(base_url, all_docs, ref, domain_refs)
    ret = f"""
      <div class="MenuContent">
        <div id="primary">
          <section class="comonSection singlefoliodetails">
            <div class="container-fluid">
              <div class="col-lg-12 noPadding">							
                <section class="col-md-10">
                  {content}
                  <hr/>
                  {gallery}
                  {attachments}
                  {crossref}
                </section>
              </div>
            </div>
          </section>    
        </div>
      </div>
    """

  except:
    ret = """
      <section class="col-md-10">
        <h2>Unknown entity</h2>
        <p>?!?</p>
      </section>
    """
    
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __build_view(base_url, html_menu, html_section, doc_entry_ref, entry_cat_ref, active_menu, with_errors):
  """
     Build an entire HTML page layout containing an html_menu and an html_section. 
  """
  gen_date = datetime.datetime.utcnow().isoformat()[:19]
  home_active = ' class="active"'  if active_menu=="home" else ""
  doc_active = ' class="active"'  if active_menu=="doc" else ""
  gloss_active = ' class="active"'  if active_menu=="gloss" else ""
  err_active = ' class="active"'  if active_menu=="err" else ""

  err_menu = f"""
    <li{err_active}><a href="{base_url}error_log.html">Errors</a></li>
    """  if with_errors else ""
  
  ' class="active"'
  
  ret = f"""
    <html>
      <head>
        <title>echOpen</title>
        <style type="text/css" media="all">		
        </style>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <meta name="description" content="echOpen project: designing an open source and low-cost echo-stethoscope">
        <!--<meta name="robots" content="follow">-->
        <!-- Include All CSS -->
        <link href="{base_url}css/_menu.css"              rel="stylesheet" type="text/css" />
        <link href="{base_url}css/bootstrap.css"          rel="stylesheet" type="text/css" />
        <link href="{base_url}css/font-awesome.min.css"   rel="stylesheet" type="text/css" />
        <link href="{base_url}css/elegant_icon.css"       rel="stylesheet" type="text/css" />
        <link href="{base_url}css/animate.css"            rel="stylesheet" type="text/css" />
        <link href="{base_url}css/settings.css"           rel="stylesheet" type="text/css" />
        <link href="{base_url}css/owl.carousel.css"       rel="stylesheet" type="text/css" />
        <link href="{base_url}css/owl.theme.css"          rel="stylesheet" type="text/css" />
        <link href="{base_url}css/magnific-popup.css"     rel="stylesheet" type="text/css" />
        <link href="{base_url}css/preset.css"             rel="stylesheet" type="text/css" />
        <link href="{base_url}css/style.css"              rel="stylesheet" type="text/css" />
        <link href="{base_url}css/responsive.css"         rel="stylesheet" type="text/css" />
        <link href="{base_url}css/responsive2.css"        rel="stylesheet" type="text/css" />
        <link href="{base_url}css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="{base_url}css/project_style.css" rel="stylesheet" type="text/css" />
        <!-- End Include All CSS -->

        <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->

        <!-- Favicon Icon -->
        <link href="{base_url}images/favicon2.png" rel="icon"  type="image/png">
        <!-- Favicon Icon -->
      </head>
      <body>
        <header class="header" id="header">
          <div class="container-fluid">
            <div class="headerLeft pull-left">
              <div class="logo">
                <a href="{base_url}index.html"><img src="{base_url}images/logo4.png" class="img-responsive" alt="event" width="105" height="30"></a>
              </div>
              <div class="mobileSearch hidden-lg hidden-md">
                <div class="searchs">
                  <a href="#" class="menuToggler"><i class="icon_menu-square_alt2"></i></a>
                </div>
              </div>
            </div>
            <div class="headerMid pull-left">
              <div class="col-lg-2 col-sm-1 hidden-xs hidden-sm">
                <div class="searchs">
                </div>
              </div>
              <div class="col-lg-10 col-sm-11">
                <nav class="mainMenu">
                  <ul>
                    <li{home_active}><a href="{base_url}index.html">Home</a></li>
                    <li{doc_active}><a href="{base_url}{entry_cat_ref}/{doc_entry_ref}/content.html">Documentation</a></li>
                    <li{gloss_active}><a href="{base_url}glossary.html">Glossary</a></li>
                    {err_menu}
                  </ul>
                </nav>
              </div>
            </div>
            <div class="headerRight pull-right">
              <div class="headerSocials">
                <a class="fac" href="https://www.facebook.com/groups/echopen/"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/echopenorg" class="twi"><i class="fa fa-twitter"></i></a>
                <a href="https://github.com/echopen" class="git"><i class="fa fa-github" ></i></a>
              </div>
            </div>
          </div>
        </header>	
        <br/>

        {html_menu}

        {html_section}

        <footer class="footer" id="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-sm-6">
                <aside class="widget">
                  <div class="aboutVeno">
                    <h2 class="fooTitle">echOpen</h2>
                    <p class="venoAddress">
                      Hotel Dieu building A1 - 6th floor <br>
                      1 Parvis Notre-Dame - Pl. Jean-Paul II<br> 75004 Paris, France<br>
                    </p>
                    <div class="contact-image-style">
                      <script type="text/javascript">
                        document.write("<a class='email_contact'href=\"mail" + "to:" + new Array("contact", "echopen.org").join("@") + "\">" + new Array("contact", "echopen.org").join("@") + "</" + "a>");
                      </script>
                    </div>
                  </div>
                </aside>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="titleBar2"></div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <p class="follow">Follow the signal</p><br>
                <a class='email_contact' href="{base_url}licences.html">EchOpen Licenses</a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="normalHr"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-sm-7">
                <div class="copys">
                  <p>
                    Copyright &copy; 2016<br>  All Right Reserved.</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="mention">
                  <p>
                    Echopen agrees that all personal user information contained in the application form will be considered confidential and are only used for communication purposes. This information will be processed automatically. Under the french “loi informatique et liberté” of January the 6th 1978, the customer has an access, rectification and opposition right to his personal data. For more information, please <a rel="nofollow" class="external text" href="mailto:contact@echopen.org">contact us</a> or have a look on our <a href="http://wiki.echopen.org/index.php/Mentions_l%C3%A9gales" title="Mentions légales">Legal Notices</a> or our wiki <a href="http://wiki.echopen.org/index.php/CGU" title="CGU">Terms of Service</a>.
                  </p>
                </div>
              </div>
              <div class="col-lg-2 col-sm-5">
                <div class="footerSocial text-right">
                  <a class="fac" href="https://www.facebook.com/groups/echopen/"><i class="fa fa-facebook"></i>
                  </a><a href="https://twitter.com/echopenorg" class="twi"><i class="fa fa-twitter"></i></a>
                  <a href="https://github.com/echopen" class="git"><i class="fa fa-github" ></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>          
      </body>
    </html>
  """
  
  return __comment_html(ret)

#-------------------------------------------------------------------------------
def __store_file(dst_dir, filename, text):
  """
     Store text in dst_dir/filename, create dir if necessary. 
  """
  if not os.path.exists(dst_dir):
    os.makedirs(dst_dir)

  path = dst_dir + filename
  print("Storing file : " + path)
  output_file = codecs.open(path, "w", encoding="utf-8",  errors="xmlcharrefreplace" )
  output_file.write(text)
  
  return path

#-------------------------------------------------------------------------------
def __store_with_attachments(dst_dir, filename, text, all_docs, ref, root_dir):
  """
     Store text in dst_dir/filename, create dir if necessary and copy attachments. 
  """
  path = __store_file(dst_dir, filename, text)

  root_doc = XML.xpath_node(all_docs, ".//document[.//*/@ref='"+ref+"']")
  rel_dir = XML.xpath_plain(root_doc, "@dir")
  src_dir = os.path.join(root_dir, rel_dir)
  attachments = XML.xpath_list(root_doc, "_meta/attachment")  
  for att in attachments:
    att_path = XML.xpath_plain(att, "@to_path")
    att_rel_path = os.path.relpath(att_path, start=rel_dir)
    src_att = os.path.join(src_dir, att_rel_path)
    dst_att = os.path.join(dst_dir, att_rel_path)
    dst_dir_att = os.path.dirname(dst_att)
    if not os.path.exists(dst_dir_att):
      os.makedirs(dst_dir_att)
    try:
      if not os.path.exists(dst_att):
        print("Storing attachment : " + dst_att)
        shutil.copyfile(src_att, dst_att)
    except:
      #LIB.debug_error()
      meta = XML.xpath_node(all_docs, ".//document[.//*/@ref='"+ref+"']/_meta")
      XML.add_error(meta, "__store_with_attachments()", "warning", "missing_file", "can't copy attachment, missing file", 0, src_att)
      
  return path

#-------------------------------------------------------------------------------
def store_content_page(www_path, all_docs, item_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors):
  """
     Store content page for item_ref entity in www_path/cat_ref/item_ref/content.html file.
  """
  base_url = "../"
  item_cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+item_ref+"']/@cat")
  entry_cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+doc_entry_ref+"']/@cat")
  html_menu = __build_menu(base_url+"../", all_docs, item_cat_ref, domain_cats)
  html_content = __build_content_section(base_url+"../", all_docs, item_ref, github_url, domain_cats, domain_refs)
  html_view = __build_view(base_url+"../", html_menu, html_content, doc_entry_ref, entry_cat_ref, "doc", with_errors)
  dst_dir = www_path + item_ref + "/"
  return __store_with_attachments(dst_dir, "content.html", html_view, all_docs, item_ref, root_dir)

#-------------------------------------------------------------------------------
def store_index_page(www_path, all_docs, cat_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors):
  """
     Store index page for ref category in www_path/cat_ref/index.html file.
  """
  base_url = "../"
  entry_cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+doc_entry_ref+"']/@cat")
  html_menu = __build_menu(base_url, all_docs, cat_ref, domain_cats)
  html_index = __build_index_section(base_url, all_docs, cat_ref, github_url, domain_refs)
  html_view = __build_view(base_url, html_menu, html_index, doc_entry_ref, entry_cat_ref, "doc", with_errors)
  dst_dir = www_path + cat_ref + "/"
  return __store_with_attachments(dst_dir, "index.html", html_view, all_docs, "", root_dir)

#-------------------------------------------------------------------------------
def store_home_page(www_path, all_docs, cat_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors):
  """
     Store index page for ref category in www_path/index.html file.
  """
  base_url = ""
  entry_cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+doc_entry_ref+"']/@cat")
  html_menu = __build_empty_menu()
  html_home = "<p>Landing page would be here !</p>"
  html_view = __build_view(base_url, html_menu, html_home, doc_entry_ref, entry_cat_ref, "home", with_errors)
  dst_dir = www_path
  return __store_with_attachments(dst_dir, "index.html", html_view, all_docs, "", root_dir)

#-------------------------------------------------------------------------------
def store_error_page(www_path, all_docs, cat_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors):
  """
     Store error page for ref category in www_path/error_log.html file.
  """
  base_url = ""
  entry_cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+doc_entry_ref+"']/@cat")
  html_menu = __build_empty_menu()
  html_errors = __build_index_errors_section(base_url, all_docs, github_url)
  html_view = __build_view(base_url, html_menu, html_errors, doc_entry_ref, entry_cat_ref, "err", with_errors)
  dst_dir = www_path
  return __store_with_attachments(dst_dir, "error_log.html", html_view, all_docs, "", root_dir)

#-------------------------------------------------------------------------------
def store_glossary_page(www_path, all_docs, cat_ref, root_dir, github_url, doc_entry_ref, domain_cats, domain_refs, with_errors):
  """
     Store error page for ref category in www_path/error_log.html file.
  """
  base_url = ""
  entry_cat_ref = XML.xpath_plain(all_docs, ".//*[@ref='"+doc_entry_ref+"']/@cat")
  html_menu = __build_empty_menu()
  html_glossary = __build_glossary_section(base_url, all_docs, github_url, domain_cats, domain_refs)
  html_view = __build_view(base_url, html_menu, html_glossary, doc_entry_ref, entry_cat_ref, "gloss", with_errors)
  dst_dir = www_path
  return __store_with_attachments(dst_dir, "glossary.html", html_view, all_docs, "", root_dir)

#-------------------------------------------------------------------------------
def store_slots_index_page(www_path, slots_list):
  """
     Store error page for ref category in www_path/error_log.html file.
  """
  slot_links = ""
  for s in slots_list:
    s_url = s[0]
    s_txt = s[1]
    link = f"""
      <li><a href="{s_url}/index.html">{s_txt}</a></li>
    """
    slot_links += link
    
  html_view = f"""
    <html>
      <head>
        <title>echOpen slots index 2</title>
        <meta charset="UTF-8">
      </head>
      <body>
        <h1>Choose a static web site to explore :</h1>
        <ul>
          {slot_links}
        </ul>
      </body>
    </html>
  """

  dst_dir = www_path
  return __store_file(dst_dir, "index.html", html_view)
