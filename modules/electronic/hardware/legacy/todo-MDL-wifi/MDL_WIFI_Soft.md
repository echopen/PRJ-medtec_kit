**Module:** data server

**Function:** signal processing

**Sub-Function: **pixel calculating

When the echoes measured by the transducer are converted into digital signal, we have to calculate the pixels and send them to client (smartphone, tablet…).

**Input/Output:**

Input: digital echoes

Output: 8 bits pixel matrix (256 grey levels image)

**Solutions:** 

version: V1.0

date: 02/05/2016

technology: commercial board (RedPitaya) + wifi dongle

**Scheme:**

![image alt text](image_0.png)

**Input/Output: **

Input: digital echoes

Output: digital image send *via *wifi with a TCP protocol

**Pros/Cons/Constraint:** 

Pros: easy to use

Cons: price

Constraint: 5V, 2A power supply

