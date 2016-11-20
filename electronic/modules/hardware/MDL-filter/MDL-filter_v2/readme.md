# Module
<!---![](viewme.png)--->

## Name
[`MDL-filter_V1`]()

## Title
Filter version 1

## Author
* [`CTC-bitmakers`]()

## About
We need a pass-band filter for removing the noise on the signal. This pass-band filter must be center on the central frequency of the transducer. Without filter:
![](./images/noisy_signal.png)

With filter:

![](./images/signal.png)

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-C_amplified-raw-signal`]()

### Output
* [`ITF-A_gnd`]()
* [`ITF-D_amplified-filtered-signal`]()

## Functions
* [`FCT-signal_processing_filtering`]()

## Scheme
![](./images/scheme.png)

## Remarks
The output signal is center on 2.5V.

[BOM](./src/MDL-filter_v2.csv)

## Results

## Pros/Cons/Constraint

**Pros:** Impedance matching with the OPA

**Cons:** NA

**Constraint:** NA
