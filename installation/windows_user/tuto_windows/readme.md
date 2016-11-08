# How to launch the acquisition

* Lauch arduino IDE and check that the right arduino board is selected by clicquing on tools:  
[](./arduino_select.png)

* Open /PRJ-medtec_kit/modules/electronic/software/MDL-motor_control/MDL-motor_control_v1.ino and send it in the arduino nano:  
[](./arduino_send.png)

* Power up your RedPitaya and connect your computer on redpitaya WIFI network, password is redpitaya.

* Open WinSCP and connect it to the RedPitaya, IP: 192.168.128.3, ID: root, pass: root:  
[](./winscp_login.png)

* On left side of WinSCP you have folders of your computer and on the right you have the ones of the RedPitaya. Go to /tmp/ folder of the RedPitaya:  
[](./winscp_tmp_folder.png)

* On the left side select /PRJ-medtec_kit/modules/electronic/software/MDL-redpitaya.Then send Acquisition_RAW to the RedPitaya:  
[](./winscp_send.png)

* Now open putty and connect it to the RedPitaya:  
[](./putty_login.png)

* Then launch the script, you might have to tune the right permission for the file. So in the putty terminal type:
** cd /tmp/
** chmod 777 Acquisition_RAW
** ./Acquisition_RAW