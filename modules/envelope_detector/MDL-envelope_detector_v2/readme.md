# Module
![](viewme.png)

## Name
[`MDL-envelope_detector_v2`]()

## Title
Envelope detector version 

## Author
* [`CTC-chaplier_gerard`]()
* [`CTC-bala_michel`]()
* [`CTC-wang_feng`]()

## Description
The acoustic image is given by the value of acoustic intensity on each point. The acoustic intensity is $I \propto 10 \log \left( \left| p \right|^2\right)$ where p is the acoustic pressure (measured by the transducer). $\left| p \right|$ is the amplitude of the pressure, this amplitude is given by the envelope of the acoustic echoes.
Input: electric echoes (alternative signal, green curve).
Output : envelope of the echoes (red curve).
![](images/pulseb.png)

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-D_amplified_filtered_signal`]()

### Output
* [`ITF-A_gnd`]()
* [`ITF-E_signal_envelope`]()

## Functions
* [`FCT-signal_processing_envelop_detecting`]()

## Scheme
![](images/scheme.png)

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
    <td>R1</td>
    <td>2800</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>C1</td>
    <td>10nF</td>
    <td>device</td>
    <td>C</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>1000</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>R3</td>
    <td>330</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>T1</td>
    <td>2N2222</td>
    <td>device</td>
    <td>Q_NPN_BCE</td>
  </tr>
  <tr>
    <td>T2</td>
    <td>2N2907A</td>
    <td>device</td>
    <td>Q_PNP_BCE</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>330</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>T3</td>
    <td>2N2907A</td>
    <td>device</td>
    <td>Q_PNP_BCE</td>
  </tr>
  <tr>
    <td>C2</td>
    <td>1nF</td>
    <td>device</td>
    <td>C</td>
  </tr>
  <tr>
    <td>C3</td>
    <td>33nF</td>
    <td>device</td>
    <td>C</td>
  </tr>
</table>


## Results

Input (blue curve)/Output (yellow curve): 

![](images/result.jpg)

## Pros/Cons/Constraint:

**Pros :** simple

**Cons :** the response is not smooth.

**Constraint :** NA
