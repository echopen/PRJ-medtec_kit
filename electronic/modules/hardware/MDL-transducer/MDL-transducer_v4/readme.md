# Module
![](./images/viewme.png)

## Name
[`MDL-transducer_v4`]()

## Title
Transducer version 4

## Author
* [`CTC-dubois_jerome`]()

## About
A transducer is needed to create acoustic wave and to measure echoes. This transducer was buy to imasonic, its central frequency is 3.5 MHz.

Temporal impulse response of the transducer
![](./images/signalt.png)

Frequencial impulse response of the transducer
![](./images/signalf.png)

Characteristics:

* Pulse duration at -6 dB: 382 ns (precision of 0.52 mm)
* Acoustic pass-band: 2.80 MHz, from 3.37 to 6.18 MHz
* Active diameter: 19 mm
* Radiusof curvature: 118 mm
* Focal depth: 92 mm
* Excitation voltage: < -150 V

## Uses
### Input
* -100V pulse
* [ITF-A_gnd]()

### Output
* [ITF-A_gnd]()
* -100V pulse + echoes

## Functions
* [`FCT-sensing_emitting`]()
* [`FCT-sensing_receiving`]()

## Scheme
NA

## Remarks
NA

## Results

## Pros/Cons/Constraint:

**Pros:** NA

**Cons:** expensive

**Constraint:** Hihg voltage, short time pulse is needed
