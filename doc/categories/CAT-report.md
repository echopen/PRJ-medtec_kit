# Category
## Name
[`CAT-report`]()

## Title
Report

## About
Any meeting report.

## Prefix
RPT-

## Menu @position=900
Reports

## Templates
Template for readme.md file defining an entity. The
readme.md file must be an instanciated version of this template placed
in the entity folder's root. The template starts just after
this paragraph. The template can be writen either as a structured file header using
Markdown syntax :

```
# Report
![](viewme.jpg)

## Name
[`RPT-yyyy_mm_dd_entity_symbolic_name`]()

## Title
*Human readable title of the entity*

## About
*A short paragraph describing the entity*

## Date
*yyyy-mm-dd*

## Writer
* [`CTC-`]()

## Attendees
* [`CTC-`]()
* [`CTC-`]()

--------------------------------------------------
```

or as a yaml meta data block :

```
---
# echOpen report yaml meta-data
report:
  Icon:      viewme.jpg
  name:      RPT-yyyy_mm_dd_entity_symbolic_name
  Title:     Human readable title of the entity
  About:     >
    A short paragraph describing the entity
  Date:      yyyy-mm-dd
  Writer:    [CTC-..., CTC-..., ]
  Attendees: [CTC-..., CTC-..., ]           
---
--------------------------------------------------
```

