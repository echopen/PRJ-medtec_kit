# Module

![](viewme.png)

## Name

[`MDL-piezoservo`]()

## Title

Cletus, simply the servo and transducer module, MDL - echomods_servopiezo

## Description

* The servo/transducer part of the echOmods
* version: V0.1
* date: 29/04/2016
* technology:  
* cost:80$
* sourcing:Recycling a transducer from ebay, servo from anywhere ([Amazon?](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dtoys-and-games&field-keywords=%22SG90+9G%22))
* language:  
* author: Kelu124

## IOs

### Inputs

* `ITF-A_gnd`
* `ITF-B_5v`
* `ITF-N_cc_motor_pwm`
* `ITF-S_3_3v`
* `ITF-mET_Transducer` : for the signal coming out of the pulser (if through SMA)
* `ITF-mET_Piezo` : connection to the piezo

### Outputs

* `ITF-mET_Piezo` : connection to the piezo
* `ITF-mET_Transducer` : for the signal coming out of the pulser (if through SMA)

## Key Components

* `Servo`
* `Piezo`

## Information

### What is it supposed to do?

The aim of this module is to interface the transducer and the servo, aka the physical parts, to the analog part of the modules chain.


### How does it work: block diagram

![Block schema](/electronic/modules/hardware/MDL-piezoservo/source/blocks.png)

* `ITF-mET_Piezo`->`Piezo`->`ITF-mET_Piezo`
* `ITF-N_cc_motor_pwm`->`Servo`
* `ITF-B_5v`->`Servo`

## About the module

### Discussion

#### Suppliers ?

A list of suppliers and some details is [available here](/electronic/modules/hardware/MDL-piezoservo/suppliers/).

#### Choice of the servo

* http://www.hobbyking.com/hobbyking/store/__23158__Turnigy_8482_TGY_1267HV_Titanium_BB_DS_MG_Servo_14kg_0_10sec_57g.html
* http://www.modmypi.com/electronics/motors-and-robotics/servo-motor-sg92r-micro

### Pros

* Simple to use

### Cons

* Slow sweeping

## Constraint and limits

* Need to find a servo which frequency is above 100hz (100hz -> 10ms period -> 1 line per 10ms is quite close)

## Discussions

### TODO

* Choose the servo (>100Hz)
* Do the structure of the holder (3D design?)

### DONE

* Get a 3.5MHz piezo

### People

* ?

Copyright Murgen and Kelu124 (murgen@echopen.org , luc@echopen.org / kelu124@gmail.com ) 2015-2018


