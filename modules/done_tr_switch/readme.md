# Module
![](viewme.png)

## Name
[`MDL-tr_switch_v1`]()

## Title
Protect the following electronic components from the high voltage pulse

## Author
* [`CTC-dubois_jerome`]()

## Description
We use MD0100 T/R switch:
[http://ww1.microchip.com/downloads/en/DeviceDoc/MD0100.pdf](http://ww1.microchip.com/downloads/en/DeviceDoc/MD0100.pdf)


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

BOM:

<table>
  <tr>
    <td>Reference</td>
    <td>Value</td>
    <td>Library</td>
    <td>Library Ref</td>
  </tr>
  <tr>
    <td>U1</td>
    <td>MD0100</td>
    <td>echopen</td>
    <td>MD0100</td>
  </tr>
  <tr>
    <td>D1</td>
    <td>1N4148</td>
    <td>device</td>
    <td>D</td>
  </tr>
  <tr>
    <td>D2</td>
    <td>IN4148</td>
    <td>device</td>
    <td>D</td>
  </tr>
</table>


## Results

## Pros/Cons/Constraint: 

**Pros :** cheap IC

**Cons :** limited to 100V high pulse

**Constraint :** IC

