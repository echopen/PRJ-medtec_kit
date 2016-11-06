To use our kit you have to install:

* [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* [WinSCP](https://winscp.net/eng/download.php)
* [arduino IDE](https://www.arduino.cc/en/Main/Software)
* [kicad v4.0.4](http://kicad-pcb.org/download/windows/)

First one have to install the RedPitaya, see MDL-redpitaya.

To push software in the RedPitaya, you have to connect to redpitaya WIFI network (pass: redpitaya). Then copy chemin/Acquistion_RAW in /tmp/ of the RedPitaya:  

Now launch putty and connect to the RedPitaya:  

Then write following command line:  
`/tmp/Acquisition_RAW`