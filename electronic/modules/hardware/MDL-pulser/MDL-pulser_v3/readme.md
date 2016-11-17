# Module
<!---![](viewme.png)--->

## Name
[`MDL-pulser_v3`]()

## Title
Pulser version 1

## Author
* [`CTC-dubois_jerome`]()

## Description
In oder to excite efficiently a transducer we must have a high voltage (around -100V high) short time (half the period of the central frequency of the transducer) excitating pulse.

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-B_5v`]()
* [`ITF-F_12v`]()
* [`ITF-I_pulse_on`]()
* [`ITF-J_pulse_off`]()
* -100V

### Output
* [`ITF-A_gnd`]()
* -100V pulse

## Functions
* [`FCT-sensing_emitting`]()

## Scheme
![](./images/scheme.png)

## Remarks
This module use [MD1211](./doc/md1211.pdf) driver MOSFET and [TC6320](./doc/tc6320.pdf) MOSFET pair ICs. Not functional for the moment, when the MD1211 receive an ITF-I_pulse_on order, it start to send a lot of pulse command.

[BOM](./src/MDL-pulser_v3.csv)

## Results

## Pros/Cons/Constraint:

**Pros:** cheap

**Cons:** not functional

**Constraint:** need 12V and 5V alimentation

