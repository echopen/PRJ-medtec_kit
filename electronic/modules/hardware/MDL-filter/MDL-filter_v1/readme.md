# Module
<!---![](viewme.png)--->

## Name
[`MDL-filter_v1`]()

## Title
Filter version 1

## Author
* [`CTC-bala_michel`]()
* [`CTC-dubois_jerome`]()

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

We use a RLC pass-band filter wich central frequency $f_c$ is given by:

$f_c=\dfrac{1}{2*\pi\sqrt{LC}}

and quality factor $Q$:

$Q=\dfrac{1}{R}\sqrt{\dfrac{L}{C}}$



[BOM](./src/MDL-filter_v1.csv)

## Results

## Pros/Cons/Constraint

**Pros:** simple

**Cons:** NA

**Constraint:** NA

