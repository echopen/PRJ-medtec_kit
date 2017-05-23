# Module
<!---![](viewme.png)--->

## Name
[`MDL-supply_v1`]()

## Title
Module supply version 1

## Author
* [`CTC-dubois_jerome`]()
* [`CTC-khoyratee_farad`]()

## About
This module will provide the electric alimentation (regulated voltage) to the electronic circuit that need some.

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-L_18v_alimentation`]()

### Output
* [`ITF-A_gnd`]()
* [`ITF-B_5v`]()
* [`ITF-F_12v`]()
* [`ITF-H_neg_12v`]()
* [`ITF-R_neg_5v`]()
* [`ITF-S_3_3v`]()

## Functions
* [`FCT-supply`]()

## Scheme
![](./images/scheme.png)

## Remarks
When MDL_pulser_v2 is plug, ITF-H_neg_12v does not deliver -12V but around -7V. On measurement_point one must measure a square signal of 18V amplitude, if you have a square signal of 9V amplitude this means that Q2 or Q3 is broken, change both.

[BOM](./src/supply_v1_0.csv)

## Results

## Pros/Cons/Constraint:

**Pros:** low cost

**Cons:** NA

**Constraint:** 18V CC as input voltage
