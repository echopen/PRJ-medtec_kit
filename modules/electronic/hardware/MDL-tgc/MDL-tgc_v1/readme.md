# Module
![](viewme.png)

## Name
[`MDL-tgc_v1`]()

## Title
Time Gain Compensation version 1

## Author
* [`CTC-dubois_jerome`]()

## Description
The living tissus attenuate the acoustic wave that propagate inside them. In order to compensate this attenuation we have to amplify the received echoes gradually with the time. Indeed the attenuation is on the forme $\e^{-\alpha d}$ where $\alpha$ is the coefficient of attenuation and $d$ is the distance of propagation. Considering that the living tissus are non dispersive media, we have linearity between distance and time : $v=\dfrac{d}{t}$. So we have to compensate the exponential decay in time.

Input/Output:

If we consider a non dissipative (no attenuation) medium we identical scatterers and supposing that the echoes of each scatterer will be the same, one acoustic measurement will be as shown on the output figure. But the living tissus attenuate the acoustic wave so ideally (with no noise) the input will be as shown on the input figure. Due to the high attenuation of the living tissus some echoes will on order of the nV or less. This small amplitude can’t get measure with a conventional ADC so we have to amplify this signal.

Input:

![](./images/attenuated_signal.png)

Output:

![](./images/signal.png)

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-B_5v`]()
* [`ITF-G_ramp`]()
* TR_switch_output

### Output
* [`ITF-A_gnd`]()
* [`ITF-C_amplified_raw_signal`]()

## Functions
* [`FCT-signal_processing_amplifying`]()

## Scheme
![](./images/scheme.png)

## Remarks
It's an [evaluation kit](./doc/ad8331_evalz.pdf), one plug input and output with SMA cables. The ramp is connected *via* test points

[BOM](./src/MDL_tgc_v1.csv)

## Results

## Pros/Cons/Constraint

**Pros:** high amplification factor accessible

**Cons:** evaluation kit so expensive and take a big place

**Constraint:** 5V alimenation and a ramp from 0 to 1V to modify the gain of the VGA
