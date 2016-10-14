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
LIBS:MDL_HVC_V2-cache
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
L Recom U1
U 1 1 57A30696
P 4950 3000
F 0 "U1" H 4950 3000 60  0000 C CNN
F 1 "R05-100B" H 4950 3150 60  0000 C CNN
F 2 "" H 4650 3100 60  0000 C CNN
F 3 "" H 4650 3100 60  0000 C CNN
	1    4950 3000
	1    0    0    -1  
$EndComp
Wire Wire Line
	4450 2600 4450 2700
Wire Wire Line
	5450 2600 5450 2700
Wire Wire Line
	4450 3150 5450 3150
Wire Wire Line
	4450 3250 5500 3250
Wire Wire Line
	4450 3350 5900 3350
Wire Wire Line
	4350 3600 5450 3600
Wire Wire Line
	4450 2650 4350 2650
Wire Wire Line
	4350 2650 4350 3600
Connection ~ 4450 3600
Connection ~ 4450 2650
$Comp
L GND #PWR01
U 1 1 57A307B6
P 4350 3600
F 0 "#PWR01" H 4350 3350 50  0001 C CNN
F 1 "GND" H 4350 3450 50  0000 C CNN
F 2 "" H 4350 3600 50  0000 C CNN
F 3 "" H 4350 3600 50  0000 C CNN
	1    4350 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	5450 2650 5550 2650
Connection ~ 5450 2650
$Comp
L +5V #PWR02
U 1 1 57A3087B
P 5550 2650
F 0 "#PWR02" H 5550 2500 50  0001 C CNN
F 1 "+5V" H 5550 2790 50  0000 C CNN
F 2 "" H 5550 2650 50  0000 C CNN
F 3 "" H 5550 2650 50  0000 C CNN
	1    5550 2650
	1    0    0    -1  
$EndComp
$Comp
L POT RV1
U 1 1 57A30924
P 5600 3150
F 0 "RV1" H 5600 3070 50  0000 C CNN
F 1 "POT" H 5600 3150 50  0000 C CNN
F 2 "" H 5600 3150 50  0000 C CNN
F 3 "" H 5600 3150 50  0000 C CNN
	1    5600 3150
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5500 3250 5500 3300
Wire Wire Line
	5500 3300 5600 3300
Connection ~ 5450 3250
Wire Wire Line
	5600 3000 5800 3000
Wire Wire Line
	5800 3000 5800 3350
Connection ~ 5450 3350
Connection ~ 5800 3350
Text GLabel 5900 3350 2    60   Input ~ 0
Vout
$EndSCHEMATC
