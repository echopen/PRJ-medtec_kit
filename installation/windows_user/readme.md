# Softwares needed

Please install these softwares:

* [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* [WinSCP](https://winscp.net/eng/download.php)
* [arduino IDE](https://www.arduino.cc/en/Main/Software)
* [kicad v4.0.4](http://kicad-pcb.org/download/windows/)

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

* Open WinSCP and connect it to the RedPitaya, IP: 192.168.128.3, ID: root, pass: root:  
![](./images/winscp_login.png)

* On left side of WinSCP you have folders of your computer and on the right you have the ones of the RedPitaya. Go to /tmp/ folder of the RedPitaya:  
![](./images/winscp_tmp_folder.png)

* On the left side select /PRJ-medtec_kit/modules/electronic/software/MDL-redpitaya.Then send Acquisition_RAW to the RedPitaya:  
![](./images/winscp_send.png)

* Now open putty and connect it to the RedPitaya:  
![](./images/putty_login.png)

* Then launch the script, you might have to tune the right permission for the file. So in the putty terminal type:  
 `cd /tmp/`  
 `chmod 777 Acquisition_RAW`  
 `./Acquisition_RAW`

# Processing

We have not develope a soft to process the image on windows yet, windows users have to use a smartphone with the echopen app.

We do our best to make a simple soft on windows for the processing as soon as possible.