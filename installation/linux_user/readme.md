# Software installation

In this repo there is two bash script:  
 ./echopen_light.sh that install minimal configuration if you just want to use the kit without modifying the software in the RedPitaya.  
 ./echopen_full.sh, that install all the tools even the ones for compiling C scripts of the RedPitaya.

The tool that will be installed are:  
 sshpass  
 arduino IDE  
 kicad  
 ...

To install one of this files just type the command line:  
`sh echopen_light.sh`  
or  
`sh echopen_full.sh`

# Prepare the RedPitaya

RedPitaya board need a 5V, 2A supply for the RedPitya.

Before turning on the RedPitaya, please copy the [old OS server files](../../modules/electronic/hardware/MDL-redpitaya/OS/server/) (../../modules/electronic/hardware/MDL-redpitaya/OS/server/) into a blank micro-SD card. We use the old RedPitaya OS (0.92) because we have found a bug with the trigger C function with the new OS.

You must also plug a WIFI dongle (such as [edimax EW_7811Un dongle](http://www.edimax.fr/edimax/merchandise/merchandise_detail/data/edimax/fr/wireless_adapters_n150/ew-7811un/)). With the files you have copy into the SD card, the RedPitaya act as an access point, the WIFI name is **redpitaya** and the pass is also **redpitaya**. It's IP adress is 192.168.128.3 and pass and ID are both root. So to access the RedPitaya *via* ssh one must enter the folowing command lines:  
`ssh root@192.168.128.3`  
`root`

# How to launch the acquisition

* Lauch arduino IDE and check that the right arduino board is selected by clicquing on tools:  
![](./images/arduino_select.png)

* Open /PRJ-medtec_kit/modules/electronic/software/MDL-motor_control/MDL-motor_control_v1.ino and send it in the arduino nano:  
![](./images/arduino_send.png)

* Power up your RedPitaya and connect your computer on redpitaya WIFI network, password is redpitaya.

* Go to [MDL-redpitaya software repo](../../modules/electronic/software/MDL-redpitaya/). If you have download the compiling tool for the RedPitaya type this command line:  
`sh run.sh 192.168.128.3 Acquisition_RAW`  
otherwise (you might not have the good permission so we make a chmod 777):  
`chmod 777 Acquisition_RAW`  
`scp ./Acquisition_RAW root@192.168.128.3:/tmp/`  
`ssh root@192.168.128.3`  
`root`  
`cd /tmp/`  
`./Acquisition_RAW`  
You can stop the sofware running in the RedPitaya by simply typing CTRL+C. You are connecting to the RedPitaya *via* ssh so if you want to quit just type:  
`exit`