**Module:** MDL_Motor

**Function:** sensing

**Sub-Function: **sweeping

In order to construct a 2D image, we have to move the transducer with a sweeping movement. This can be done with a motor (and a movement convertor).

**Input/Output:**

Input: PWM

Output: rotary movement

**Solutions:** 

version: V1.0

date: 02/05/2016

technology: motor + integrated circuit (encoder)

contributor: Jérôme

**Scheme:**

We use a DC motor with integrated encoder ref: RB-Pol-123 (robotshop). We can’t find the exact reference, but a similare one is: [http://www.robotshop.com/ca/fr/moteur-12v-engrenage-191-avec-encodeur-64-cpr.html](http://www.robotshop.com/ca/fr/moteur-12v-engrenage-191-avec-encodeur-64-cpr.html)

This motor is coupled to a movement converter.

**Input/Output: **

Input: pwm

Output: rotary movement and encoder informations (logic signal 0 to 5V)

**Pros/Cons/Constraint:** 

Pros: simple

Cons:

Constraint: need movement converter and top tour to know the position of the transducer

version: V2.0

date: 01/06/2016

technology: stepper

contributor: Jérôme

**Scheme:**

We use this stepper motor: 

[http://www.gotronic.fr/art-moteur-14hm11-0404s-23048.htm](http://www.gotronic.fr/art-moteur-14hm11-0404s-23048.htm)

**Input/Output: **

Input: stepper control (from A4988)

Output: rotary or sweeping movement

**Pros/Cons/Constraint:** 

Pros: simple, total control of the movement

Cons:

Constraint: need mechanical stop to initialise the position of the motor

