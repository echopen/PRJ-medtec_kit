# Configuration
![](viewme.png)

## Name
[`CFG-arduino_servo`]()

## Title
Dev kit v.1.1

## About

### Intro 
The aim of this set of modules is to remove the "heavy-weight" Acquisition System and to replace it with a small arduino-like, capable of acquiring 6Msps and stream it over wifi, while leveraging the arduino IDE.

Of course, due to its limitation, it cannot properly sample the raw signal coming back from the transducer, but with the help of the [analog processing module](../../electronic/modules/hardware/MDL-analog_processing_ic), the enveloppe of the signal, ie the bones of the ultrasound image, is ready to be acquired.

For the fun of it, this configuration has a small 128x60 monochrome screen, to see what the microcontroller is acquiring.

### Plugin in the servo+transducer module 

Organizing the modules

![](https://raw.githubusercontent.com/kelu124/echomods/master/croaker/images/kit-overall.png)

With the overview, and the transducer

![](https://raw.githubusercontent.com/kelu124/echomods/master/croaker/images/kit-overaview.png)

### Scripts

Script used were:

* `nc -lu 5005 > 20161217-222737.data` -- to acquire the [raw data](/electronic/modules/hardware/MDL-arduino_wifi_daq/data/20161217/raw_data/20161217-222737.data) streamed by the arduino on port 5005
* `python CreateCSV2.py 20161217-222737.data` -- using the [CreateCSV2](/electronic/modules/hardware/MDL-arduino_wifi_daq/data/manual/CreateCSV2.py) script to generate proper data using the good format from the raw data file. This was later consolidated in a single image.

### Type of image acquired

#### Comparison of raw images to the phantom

![](/electronic/modules/hardware/MDL-arduino_wifi_daq/data/20161217/images/result.png)

#### Analyse
 
![](/electronic/modules/hardware/MDL-arduino_wifi_daq/data/20161217/20161217-222737-commented.png)

## Uses

* [`MDL-pulser_control `](../../electronic/modules/hardware/MDL-pulser_control)
* [`MDL-piezoservo `](../../electronic/modules/hardware/MDL-power_supply/MDL-piezoservo)
* [`MDL_breadboard_supply`](../../electronic/modules/hardware/MDL_breadboard_supply)
* [`MDL-analog_processing_ic `](../../electronic/modules/hardware/MDL-analog_processing_ic)
* [`MDL-pulser_ic `](../../electronic/modules/hardware/MDL-pulser_ic)
* [`MDL-arduino_wifi_daq `](../../electronic/modules/hardware/MDL-arduino_wifi_daq)


