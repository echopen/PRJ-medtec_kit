# Software installation

In this repo there is two bash script:  
 ./echopen_light.sh that install minimal configuration if you just want to use the kit without modifying the software in the RedPitaya.  
 ./echopen_full.sh, that install all the tools even the ones for compiling C scripts of the RedPitaya.

The tool that will be installed are:  
 sshpass  
 kicad  
 ...

To install one of this files just type the command line:  
`sh echopen_light.sh`  
or  
`sh echopen_full.sh`

You also have to install arduino IDE, follow the instruction on their [website](https://www.arduino.cc/en/Guide/Linux).

# Prepare the RedPitaya

RedPitaya board need a 5V, 2A supply for the RedPitya.

Before turning on the RedPitaya, please copy the [old OS server files](../../electronic/modules/hardware/MDL-redpitaya/OS/server/) (../../modules/electronic/hardware/MDL-redpitaya/OS/server/) into a blank micro-SD card. We use the old RedPitaya OS (0.92) because we have found a bug with the trigger C function with the new OS.

You must also plug a WIFI dongle (such as [edimax EW_7811Un dongle](http://www.edimax.fr/edimax/merchandise/merchandise_detail/data/edimax/fr/wireless_adapters_n150/ew-7811un/)). With the files you have copy into the SD card, the RedPitaya act as an access point, the WIFI name is **redpitaya** and the pass is also **redpitaya**. It's IP adress is 192.168.128.3 and pass and ID are both root. So to access the RedPitaya *via* ssh one must enter the folowing command lines:  
`ssh root@192.168.128.3`  
`root`

# How to launch the acquisition

* Go to [software folder](../../electronic/modules/software) and select the folder corresponding to your configuration.

* Lauch arduino IDE and check that the right arduino board is selected by clicquing on tools:  
![](./images/arduino_select.png)

* Open the arduino file (.ino file) and send it in the arduino nano:  
![](./images/arduino_send.png)

* Power up your RedPitaya and connect your computer on redpitaya WIFI network, password is redpitaya.

* Go to RedPitaya repo. If you have download the compiling tool for the RedPitaya type this command line:  
`sh run.sh 192.168.128.3 probe`  
otherwise (you might not have the good permission so we make a chmod 777):  
`chmod 777 probe`  
`scp ./probe root@192.168.128.3:/tmp/`  
`ssh root@192.168.128.3`  
`root`  
`cd /tmp/`  
`./probe`  
You can stop the sofware running in the RedPitaya by simply typing CTRL+C. You are connecting to the RedPitaya *via* ssh so if you want to quit just type:  
`exit`

* Note, power the RedPitaya before power up the electronic kit.

# Display

To display the image one can use the android application.

One can also use the C software provided in ./src repo. This softs used are based on [gnuplot_i](http://ndevilla.free.fr/gnuplot/) tool, tuned for our uses. All the sources are provided here so one can modify them if desire.

probe_mode_A display line by line measurement such as an oscilloscope. probe_mode_B display the full image on gray scale such as an echographic machin, excepte there is no scan conversion (image display in a rectangle).