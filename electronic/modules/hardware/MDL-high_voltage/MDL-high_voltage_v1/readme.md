# Module
<!---![](viewme.png)--->

## Name
[`MDL-high_voltage_v1`]()

## Title
High voltage circuit version 1

## Author
* [`CTC-dubois_jerome`]()
* [`CTC-chaplier_gerard`]()

## About

We need a high negative voltage pulse to excite the transducer, typically -100V

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-B_5v`]()
* [`ITF-L_18v_alimentation`]()

### Output
* [`ITF-A_gnd`]()
* -100V

## Functions
* [`FCT-sensing_emitting`]()

## Scheme
![](./images/scheme.png)

## Remarks

High voltage is obtained with a [Cockcroft Walton multiplier](https://en.wikipedia.org/wiki/Cockcroft%E2%80%93Walton_generator). Input of the multiplier is a square signal between 0 and 18 V, there are 5 stages of multiplication (output is a square signal between 90 and 108 V). Output is around -97 V after smoothing.

[BOM](./src/MDL-high_voltage_v1.csv)

## Results

## Pros/Cons/Constraint

**Pros:** low electromagnetic scatterred field

**Cons:** low intensity

**Constraint:** NA
