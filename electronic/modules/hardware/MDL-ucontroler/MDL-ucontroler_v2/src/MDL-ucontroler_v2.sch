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
LIBS:MDL-ucontroler_v1-cache
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
L ARDUINO_NANO SH1
U 1 1 57AAFAD2
P 5150 3200
F 0 "SH1" H 5150 2550 60  0000 C CNN
F 1 "ARDUINO_NANO" H 5150 4150 60  0000 C CNN
F 2 "" H 4225 2600 60  0000 C CNN
F 3 "" H 4225 2600 60  0000 C CNN
	1    5150 3200
	1    0    0    -1  
$EndComp
Text GLabel 2950 1750 0    60   Input ~ 0
ITF-B_5v
Wire Wire Line
	5800 2650 6000 2650
Wire Wire Line
	6000 2650 6000 1750
Wire Wire Line
	6000 1750 2950 1750
Wire Wire Line
	4350 2650 5150 2650
Wire Wire Line
	5150 2900 5150 2450
Wire Wire Line
	5150 2450 5800 2450
$Comp
L R R1
U 1 1 59242B28
P 3000 2600
F 0 "R1" V 3080 2600 50  0000 C CNN
F 1 "680" V 3000 2600 50  0000 C CNN
F 2 "" V 2930 2600 50  0001 C CNN
F 3 "" H 3000 2600 50  0001 C CNN
	1    3000 2600
	0    1    1    0   
$EndComp
$Comp
L R R2
U 1 1 59242B6B
P 3650 2100
F 0 "R2" V 3730 2100 50  0000 C CNN
F 1 "1.5k" V 3650 2100 50  0000 C CNN
F 2 "" V 3580 2100 50  0001 C CNN
F 3 "" H 3650 2100 50  0001 C CNN
	1    3650 2100
	1    0    0    -1  
$EndComp
$Comp
L R R3
U 1 1 59242BC6
P 3650 3600
F 0 "R3" V 3730 3600 50  0000 C CNN
F 1 "1.5k" V 3650 3600 50  0000 C CNN
F 2 "" V 3580 3600 50  0001 C CNN
F 3 "" H 3650 3600 50  0001 C CNN
	1    3650 3600
	1    0    0    -1  
$EndComp
$Comp
L R R4
U 1 1 59242C27
P 4250 3150
F 0 "R4" V 4330 3150 50  0000 C CNN
F 1 "680" V 4250 3150 50  0000 C CNN
F 2 "" V 4180 3150 50  0001 C CNN
F 3 "" H 4250 3150 50  0001 C CNN
	1    4250 3150
	0    1    1    0   
$EndComp
$Comp
L 2N2222 Q1
U 1 1 59242C98
P 3550 2600
F 0 "Q1" H 3750 2675 50  0000 L CNN
F 1 "2N2222" H 3750 2600 50  0000 L CNN
F 2 "" H 3750 2525 50  0000 L CIN
F 3 "" H 3550 2600 50  0000 L CNN
	1    3550 2600
	1    0    0    -1  
$EndComp
$Comp
L 2N2222 Q2
U 1 1 59242CDF
P 3750 3150
F 0 "Q2" H 3950 3225 50  0000 L CNN
F 1 "2N2222" H 3950 3150 50  0000 L CNN
F 2 "" H 3950 3075 50  0000 L CIN
F 3 "" H 3750 3150 50  0000 L CNN
	1    3750 3150
	-1   0    0    1   
$EndComp
Text GLabel 2800 2900 0    60   Input ~ 0
ITF-A_gnd
Text GLabel 2750 3750 0    60   Input ~ 0
ITF-S_3_3v
Wire Wire Line
	2800 2900 5150 2900
Wire Wire Line
	3650 2800 3650 2950
Connection ~ 3650 2900
Wire Wire Line
	3950 3150 4100 3150
Wire Wire Line
	4400 3150 4500 3150
Wire Wire Line
	3150 2600 3350 2600
Wire Wire Line
	3650 2400 3650 2250
Wire Wire Line
	3650 1950 3650 1750
Connection ~ 3650 1750
Wire Wire Line
	3650 2300 4150 2300
Wire Wire Line
	4150 2300 4150 2750
Wire Wire Line
	4150 2750 4500 2750
Connection ~ 3650 2300
Connection ~ 5150 2650
Wire Wire Line
	2750 3750 3650 3750
Wire Wire Line
	3650 3450 3650 3350
Wire Wire Line
	4500 2950 5000 2950
Wire Wire Line
	5000 2950 5000 4250
Wire Wire Line
	5000 4250 3700 4250
Wire Wire Line
	4500 3050 4900 3050
Wire Wire Line
	4900 3050 4900 4100
Wire Wire Line
	4900 4100 3700 4100
Text GLabel 3700 4100 0    60   Input ~ 0
ITF-I_pulse_on
Text GLabel 3700 4250 0    60   Input ~ 0
ITF-J_pulse_off
Text GLabel 2750 2600 0    60   Input ~ 0
RP_E1_DIO7_N
Wire Wire Line
	2750 2600 2850 2600
Text GLabel 3100 3400 0    60   Input ~ 0
ITF-K_pulse_redpitaya
Wire Wire Line
	3100 3400 3650 3400
Connection ~ 3650 3400
$Comp
L CP C1
U 1 1 59243A2C
P 4350 2000
F 0 "C1" H 4375 2100 50  0000 L CNN
F 1 "10u" H 4375 1900 50  0000 L CNN
F 2 "" H 4388 1850 50  0001 C CNN
F 3 "" H 4350 2000 50  0001 C CNN
	1    4350 2000
	1    0    0    -1  
$EndComp
Wire Wire Line
	4350 2650 4350 2150
Connection ~ 4500 2650
Wire Wire Line
	4350 1850 4350 1750
Connection ~ 4350 1750
$EndSCHEMATC
