# Module
![](viewme.png)

## Name
[`MDL-filter_V1`]()

## Title
Filter version 1

## Author
* [`CTC-bala_michel`]()
* [`CTC-dubois_jerome`]()

## Description
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
BOM:

<table>
  <tr>
    <td>Reference</td>
    <td>Value</td>
    <td>Library</td>
    <td>Library Ref</td>
  </tr>
  <tr>
    <td>C1</td>
    <td>1000p</td>
    <td>device</td>
    <td>C</td>
  </tr>
  <tr>
    <td>L1</td>
    <td>10u</td>
    <td>device</td>
    <td>INDUCTOR</td>
  </tr>
  <tr>
    <td>R1</td>
    <td>330</td>
    <td>device</td>
    <td>R</td>
  </tr>
</table>

## Results

## Pros/Cons/Constraint

**Pros:** simple

**Cons:** NA

**Constraint:** NA

