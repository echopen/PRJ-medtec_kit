# Daughter_board
![](viewme.png)

## Name
[`DB-pulser_v2`]()

## Title
Daughter board pulser version 3

## Author
* [`CTC-dubois_jerome`]()

## Modules included
* [`MDL-pulser_v1`]()

## Interfaces
### Input
* [`ITF-A_gnd`]()
* [`ITF-F_12v`]()
* [`ITF-I_pulse_on`]()

### Output
* [`ITF-A_gnd`]()

##External connections
### Input
* -100V (P2, P6)

### Output
* -100V pulse (P4, P5, P7, P8)

## Scheme
![](images/scheme.png)

## Remarks
[BOM](./src/DB-pulser_v1.csv)

If the cable connecting the transducer to the pulse is too long, one might have loop effect. This can be avoid with impedance adaptation, we are currently working on that.

-100V input is connected to P2 or P6 (angled socket and SMA connector respectively). Connector P4, P5, P7 and P8 are used to plugged the transducer and to connect with DB-tr_switch_tgc.

A small 47 ohms resistors had to be add to have the pulse, it don't work without it.

## Results

## Pros/Cons/Constraint:

**Pros:** cheap solution

**Cons:** NA

**Constraint:** NA
