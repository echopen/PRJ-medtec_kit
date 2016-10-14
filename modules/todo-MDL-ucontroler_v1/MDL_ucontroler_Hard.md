**Module:** MDL_ucontroler_Hard

**Function:** 

**Sub-Function: **

The microcontroler regulate the motorvelocity and calculate when we send an acoustic pulse (and synchronise the acquisition module).

**Input/Output:**

Input: Vcc and some digital signals

Output: logic signals (maybe analogic signals)

**Solutions:** 

version: V1.0

date: 28/04/2016

technology: integrated circuit (commercial board)

contributor: Jérôme

Source:

[https://www.arduino.cc/en/Main/ArduinoBoardNano](https://www.arduino.cc/en/Main/ArduinoBoardNano)

[https://github.com/echopen/electronic/tree/master/kicad/Modules/MDL_ucontroler/V1](https://github.com/echopen/electronic/tree/master/kicad/Modules/MDL_ucontroler/V1)

**Scheme:**

![image alt text](image_0.png)

**Input/Output:**

Input: 5V Vcc, encoder signal, top tour signal

Output: pwm for motor speed control, pulse to HV pulser and RedPitaya trigger

**Pros/Cons/Constraint:** 

Pros: easy to use

Cons: not really real time

Constraint: NA

