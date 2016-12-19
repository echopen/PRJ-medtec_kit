# 2016-12-17 -- Lab Log

## Aim of the work

* **Test the (lower-speed) acquisition using an arduino's ADC (~2Msps), which also streams over wifi, over UDP.**
* **Build and test a very basic, yet accurate, phantom**

## Setup

The classical one. Using the [pulser](/electronic/module/hardware/MDL-pulser_ic/) module, [analog processing](/electronic/module/hardware/MDL-analog_processing_ic/) module, and a [arduino-like](/croaker) to capture and stream the data. Piezo moved by a servo ([module](/electronic/module/hardware/MDL-piezoservo/)).

### Setup:

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/images/DSC_1176.JPG)

### Phantom

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/images/DSC_1177.JPG)

## Capturing data

Script used were:

* `nc -lu 5005 > 20161217-222737.data` -- to acquire the [raw data](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/raw_data/20161217-222737.data) streamed by the arduino on port 5005
* `python CreateCSV2.py 20161217-222737.data` -- using the [CreateCSV2](/electronic/module/hardware/MDL-arduino_wifi_daq/data/manual/CreateCSV2.py) script to generate proper data using the good format from the raw data file. This was later consolidated in a single image.

## Raw images

### Acquisition of 4 images

Presented non scan converted

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/images/all_raw.png)

### Comparison of raw images to the phantom

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/images/result.png)

## Preparing the image

I aggregated the 4 images in one image with the [rebuild script](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/raw_data/rebuild.py) which yielded

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/20161217-222737.png)

and scan converted it:

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/20161217-222737-SC.png)

## Conclusion

![](/electronic/module/hardware/MDL-arduino_wifi_daq/data/20161217/20161217-222737-commented.png)

* The acquisition is not too bad, even using an arduino
* The servo may be the limiting element in terms of lateral resolution
    * the breadboard pitch is 0.1 inch, 2.54mm. We resolve this.
* There is an issue with repetition echoes: it may be worth waiting more than 300us between shooting lines.


## Next steps

* Using a gyro
* Using a RPi0 to connect to the [analog processing](/electronic/module/hardware/MDL-analog_processing_ic/) onboard ADC.
