# Module
<!---![](viewme.png)--->

## Name
[`MDL-envelope_detector_v2`]()

## Title
Envelope detector version 

## Author
* [`CTC-chaplier_gerard`]()
* [`CTC-bala_michel`]()
* [`CTC-wang_feng`]()

## Description
The acoustic image is given by the value of acoustic intensity on each point. The acoustic intensity $I \propto 10 \log \left( \left| p \right|^2\right)$ where p is the acoustic pressure (measured by the transducer). $\left| p \right|$ is the amplitude of the pressure, this amplitude is given by the envelope of the acoustic echoes.
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
[BOM](./src/MDL-envelope_detector_v2.csv)

## Results

Input (blue curve)/Output (yellow curve): 

![](images/result.jpg)

## Pros/Cons/Constraint:

**Pros:** simple

**Cons:** the response is not smooth.

**Constraint:** NA
