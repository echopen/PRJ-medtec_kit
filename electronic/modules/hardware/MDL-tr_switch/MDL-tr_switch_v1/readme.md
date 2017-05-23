# Module
![](viewme.png)

## Name
[`MDL-tr_switch_v1`]()

## Title
Protect the following electronic components from the high voltage pulse

## Author
* [`CTC-dubois_jerome`]()

## About
We use a [MD0100](../../../../miscellaneous/datasheets/TR_switch/MD0100.pdf) T/R switch.


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

The MD0100 T/R switch need two diodes top to tail.

[BOM](./src/MDL-tr_switch_v1.csv)

## Results

## Pros/Cons/Constraint: 

**Pros :** cheap IC

**Cons :** limited to 100V high pulse

**Constraint :** IC

