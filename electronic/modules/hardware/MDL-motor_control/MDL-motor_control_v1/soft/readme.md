# Module

## Name
[`MDL-motor_control_soft_v1`]()

## Title
Firmware of the MDL-motor_control_v1

## Author
* [`CTC-dubois_jerome`]()

## About
The function Velocity is made on interruption, each time the encoder of the motor change from LOW to HIGH level, the velocity is calculated. Due to RedPitaya speed limitation (on measurement), with have limited the motor "virtual" velocity to Vlim. So even if the motor is too fast, the time between two pulse will be long enough to make an acquisition.

The function Interpolation determine the angle difference of the motor position between each pulse. With this angle and the instantaneous velocity we can determined the time between each pulse. The interpolation function give a constant dz on a line perpendicular to the probe.

## Flowchart
![](../images/flowchart.png)

## Source
Soon...

## Remarks
An API will be made soon.



