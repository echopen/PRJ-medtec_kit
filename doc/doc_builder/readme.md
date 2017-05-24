# Application

## Name
[`APP-doc_builder`]()

## Title
Documentation builder application

## About
Small command line application that parses all echOpen repositories to find documentation
elements. This application produce static HTML web sites for different documentation
levels.

## Installation
* Python 3.6.0 for Windows 64bits (install for all users)
* `python -m pip install --upgrade pip` (from superuser console)
* `pip install markdown` (from superuser console)
* `pip install PyYAML` (from superuser console)
* `pip install lxml` (from superuser console)
  * if it doesn't work go on http://www.lfd.uci.edu/~gohlke/pythonlibs/#lxml and download to src/vendor `lxml‑3.6.4‑cp35‑cp35m‑win32.whl` or `lxml‑3.6.4‑cp35‑cp35m‑win_amd64.whl` depending on your Python platform. Then run :
  * `pip install vendor/lxml-3.6.4-cp35-cp35m-win32.whl` (from superuser console)
  * `pip install vendor/lxml-3.6.4-cp35-cp35m-win_amd64.whl` (from superuser console)

## Run

To rebuild documentation as a new static web site :

1. Run a console
2. Change directory to PRJ-medtec_kit/doc/doc_builder
3. Remove all files in PRJ-medtec_kit/doc/www
4. Execute python script doc_builder.py
5. Copy newly created static web site from PRJ-medtec_kit/doc/www/slot1 to echOpen production web serveur under documentation http://echopen.org/doc-website/
