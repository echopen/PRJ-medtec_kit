EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:echopen
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L PYB30 U1
U 1 1 57A84712
P 5550 2400
F 0 "U1" H 5500 2200 60  0000 C CNN
F 1 "PYB30" H 5300 2350 60  0000 C CNN
F 2 "" H 5550 2400 60  0001 C CNN
F 3 "" H 5550 2400 60  0001 C CNN
	1    5550 2400
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR01
U 1 1 57A848AE
P 4950 2150
F 0 "#PWR01" H 4950 1900 50  0001 C CNN
F 1 "GND" H 4950 2000 50  0000 C CNN
F 2 "" H 4950 2150 50  0000 C CNN
F 3 "" H 4950 2150 50  0000 C CNN
	1    4950 2150
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR02
U 1 1 57A848C4
P 6100 2450
F 0 "#PWR02" H 6100 2200 50  0001 C CNN
F 1 "GND" H 6100 2300 50  0000 C CNN
F 2 "" H 6100 2450 50  0000 C CNN
F 3 "" H 6100 2450 50  0000 C CNN
	1    6100 2450
	1    0    0    -1  
$EndComp
Text GLabel 4950 2000 0    60   Input ~ 0
18V
Text GLabel 6100 2000 2    60   Input ~ 0
5V
Text GLabel 6100 2150 2    60   Input ~ 0
+12V
Text GLabel 6100 2300 2    60   Input ~ 0
-12V
$EndSCHEMATC
