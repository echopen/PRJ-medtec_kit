# Module
![](viewme.png)

## Name
[`MDL-tr_switch_v1`]()

## Title
Protect the following electronic components from the high voltage pulse

## Author
* [`CTC-dubois_jerome`]()

## Description
We use [MD0100](./doc/MD0100.pdf) T/R switch.


## Uses
### Input
* [`ITF-A_gnd`]()
* Pulser output (-100V pulse + echoes from transducer)

### Output
* [`ITF-A_gnd`]()
* clipped signal (pulser output clipped between -2V and +2V)

## Functions
* [`FCT-signal_processing_clipping`]()

## Scheme
![](images/scheme.png)

## Remarks
[BOM](./src/MDL-tr_switch_v1.csv)

## Results

## Pros/Cons/Constraint: 

**Pros :** cheap IC

**Cons :** limited to 100V high pulse

**Constraint :** IC

