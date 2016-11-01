# Module
![](viewme.png)

## Name
[`MDL-motor_control_v1`]()

## Title
Motor control version 1, CC motor

## Author
* [`CTC-jerome_dubois`]()

## Description
We use a single transducer, it must sweep a given angle in order to make 2D imaging, this can be done with a movement convertor. But if we want to uniformely scan the angle, we have to know exactly where and when the transducer is located. Thit is done with the toptour to know the absolute position of the transducer, then the position of the transducer is calculted by the microcontroler.

## Uses
### Input
* [`ITF-A_gnd`]()
* [`ITF-B_5v`]()
* [`ITF-N_cc_motor_pwm`]()

### Output
* [`ITF-A_gnd`]()
* [`ITF-M_abs_angle`]()
* [`ITF-O_cc_motor_encodor`]()

## Functions
* [`FCT-sensing_sweeping`]()

## Scheme
![](./images/scheme.png)

## Remarks
We use the motor presented in MDL_motor_v1.

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
    <td>680</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>1k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>R3</td>
    <td>33k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>330</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>R5</td>
    <td>2.2k</td>
    <td>device</td>
    <td>R</td>
  </tr>
  <tr>
    <td>Q1</td>
    <td>2N2222</td>
    <td>device</td>
    <td>Q</td>
  </tr>
  <tr>
    <td>D1</td>
    <td>1N4001</td>
    <td>device</td>
    <td>D</td>
  </tr>
 
</table>

## Results

## Pros/Cons/Constraint:

**Pros:** NA

**Cons:** the transducer position is calculated depend on one absolute position and instantaneous motor velocity

**Constraint:** 5V to 12V supply voltage
