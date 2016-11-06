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
L SOIC_8 U1
U 1 1 57BDA78D
P 4950 2550
F 0 "U1" H 4950 2300 60  0000 C CNN
F 1 "MD1211" V 4950 2550 60  0000 C CNN
F 2 "Housings_SOIC:SOIJ-8_5.3x5.3mm_Pitch1.27mm" H 4950 2550 60  0001 C CNN
F 3 "" H 4950 2550 60  0001 C CNN
	1    4950 2550
	1    0    0    -1  
$EndComp
$Comp
L SOIC_8 U2
U 1 1 57BDA7E6
P 6300 2550
F 0 "U2" H 6300 2300 60  0000 C CNN
F 1 "TC6320" V 6300 2550 60  0000 C CNN
F 2 "Housings_SOIC:SOIJ-8_5.3x5.3mm_Pitch1.27mm" H 6300 2550 60  0001 C CNN
F 3 "" H 6300 2550 60  0001 C CNN
	1    6300 2550
	1    0    0    -1  
$EndComp
Wire Wire Line
	3950 2400 4650 2400
Wire Wire Line
	4650 2600 4800 2600
Wire Wire Line
	4800 2600 4800 2300
Connection ~ 4800 2300
Wire Wire Line
	3950 3100 4650 3100
Wire Wire Line
	4650 3100 4650 2700
Wire Wire Line
	4450 2500 4650 2500
Wire Wire Line
	5400 2800 3950 2800
Wire Wire Line
	5400 2400 5400 2800
Wire Wire Line
	5400 2600 5250 2600
Wire Wire Line
	5250 2400 5400 2400
Connection ~ 5400 2600
$Comp
L C C1
U 1 1 57BDAAFD
P 4100 2650
F 0 "C1" H 4125 2750 50  0000 L CNN
F 1 "470n" H 4125 2550 50  0000 L CNN
F 2 "Echopen:C_TH_common" H 4138 2500 50  0001 C CNN
F 3 "" H 4100 2650 50  0000 C CNN
	1    4100 2650
	1    0    0    -1  
$EndComp
Connection ~ 4100 2800
Wire Wire Line
	4100 2500 4100 2300
Connection ~ 4100 2300
$Comp
L C C3
U 1 1 57BDAEA8
P 5600 2500
F 0 "C3" H 5625 2600 50  0000 L CNN
F 1 "10n" H 5625 2400 50  0000 L CNN
F 2 "Echopen:C_TH_common" H 5638 2350 50  0001 C CNN
F 3 "" H 5600 2500 50  0000 C CNN
	1    5600 2500
	0    -1   -1   0   
$EndComp
$Comp
L C C4
U 1 1 57BDAF3C
P 5600 2700
F 0 "C4" H 5625 2800 50  0000 L CNN
F 1 "10n" H 5625 2600 50  0000 L CNN
F 2 "Echopen:C_TH_common" H 5638 2550 50  0001 C CNN
F 3 "" H 5600 2700 50  0000 C CNN
	1    5600 2700
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5250 2500 5450 2500
Wire Wire Line
	5250 2700 5450 2700
Wire Wire Line
	6600 2400 6650 2400
Wire Wire Line
	6650 2400 6650 2500
Wire Wire Line
	6650 2500 6600 2500
Wire Wire Line
	6600 2600 6650 2600
Wire Wire Line
	6650 2600 6650 2700
Wire Wire Line
	6650 2700 6600 2700
$Comp
L D D1
U 1 1 57BDB158
P 6800 2450
F 0 "D1" H 6800 2550 50  0000 C CNN
F 1 "1N4148" H 6800 2350 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 6800 2450 50  0001 C CNN
F 3 "" H 6800 2450 50  0000 C CNN
	1    6800 2450
	1    0    0    -1  
$EndComp
$Comp
L D D2
U 1 1 57BDB1B7
P 6800 2650
F 0 "D2" H 6800 2750 50  0000 C CNN
F 1 "1N4148" H 6800 2550 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 6800 2650 50  0001 C CNN
F 3 "" H 6800 2650 50  0000 C CNN
	1    6800 2650
	-1   0    0    -1  
$EndComp
Connection ~ 6650 2450
Connection ~ 6650 2650
Wire Wire Line
	6950 2450 6950 2650
Wire Wire Line
	6950 2550 7050 2550
Connection ~ 6950 2550
$Comp
L CP C5
U 1 1 57BDC3C6
P 5650 3400
F 0 "C5" H 5675 3500 50  0000 L CNN
F 1 "33u (150V)" H 5675 3300 50  0000 L CNN
F 2 "Echopen:CP_TH_common" H 5688 3250 50  0001 C CNN
F 3 "" H 5650 3400 50  0000 C CNN
	1    5650 3400
	1    0    0    1   
$EndComp
Wire Wire Line
	5650 3250 5650 3050
Connection ~ 5650 3050
Wire Wire Line
	3950 3200 4450 3200
Wire Wire Line
	4450 3200 4450 2500
Wire Wire Line
	5750 2700 5850 2700
Wire Wire Line
	5850 2700 5850 2500
Wire Wire Line
	5850 2500 6000 2500
Wire Wire Line
	5750 2500 5750 2600
Wire Wire Line
	5750 2600 5900 2600
Wire Wire Line
	5900 2600 5900 2700
Wire Wire Line
	5900 2700 6000 2700
Wire Wire Line
	6000 2600 6150 2600
Wire Wire Line
	6150 2600 6150 2300
Connection ~ 6150 2300
Wire Wire Line
	5950 3050 5950 2400
Wire Wire Line
	5950 2400 6000 2400
$Comp
L C C2
U 1 1 57FE4AD5
P 4350 2250
F 0 "C2" H 4375 2350 50  0000 L CNN
F 1 "1u" H 4375 2150 50  0000 L CNN
F 2 "Echopen:C_TH_common" H 4388 2100 50  0001 C CNN
F 3 "" H 4350 2250 50  0000 C CNN
	1    4350 2250
	1    0    0    -1  
$EndComp
Connection ~ 4350 2400
Wire Wire Line
	4350 2100 4550 2100
Wire Wire Line
	4550 2100 4550 2300
Connection ~ 4550 2300
Wire Wire Line
	3950 2300 7350 2300
Wire Wire Line
	5950 3050 5500 3050
Wire Wire Line
	5650 3550 7350 3550
Wire Wire Line
	7350 3550 7350 2300
Text GLabel 7050 2550 3    60   Input ~ 0
Pulse
Text GLabel 3950 2300 0    60   Input ~ 0
ITF-A_gnd
Text GLabel 3950 2400 0    60   Input ~ 0
ITF-B_5v
Text GLabel 3950 2800 0    60   Input ~ 0
ITF-F_12v
Text GLabel 3950 3100 0    60   Input ~ 0
ITF-I_pulse_on
Text GLabel 3950 3200 0    60   Input ~ 0
ITF-J_pulse_off
Text GLabel 5500 3050 0    60   Input ~ 0
-100V
$EndSCHEMATC
