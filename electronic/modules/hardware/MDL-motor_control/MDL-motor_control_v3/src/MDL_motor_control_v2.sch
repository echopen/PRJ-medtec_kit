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
Text Notes 7300 7475 0    59   ~ 0
Stepper motor control with driver A4988 and Microcontroller Arduino NanoATmega168
$Comp
L POLOLU_A4988 U1
U 1 1 57A99E63
P 4550 3050
F 0 "U1" H 4550 3500 60  0000 C CNN
F 1 "POLOLU_A4988" V 4550 3050 50  0000 C CNN
F 2 "" H 4550 3050 60  0000 C CNN
F 3 "" H 4550 3050 60  0000 C CNN
	1    4550 3050
	-1   0    0    1   
$EndComp
$Comp
L Stepper_motor_14HM11-0404S Motor1
U 1 1 57A9AFD6
P 6500 3700
F 0 "Motor1" H 6000 4100 60  0000 L TNN
F 1 "Stepper_motor" H 6250 4600 47  0000 C CNN
F 2 "" H 5800 3600 60  0000 C CNN
F 3 "" H 5400 5200 60  0000 C CNN
	1    6500 3700
	1    0    0    -1  
$EndComp
Wire Wire Line
	5150 3200 5900 3200
Wire Wire Line
	5150 3100 5900 3100
Wire Wire Line
	5150 3000 5900 3000
Wire Wire Line
	5150 2900 5900 2900
$Comp
L CP C1
U 1 1 57A9B39D
P 5550 2450
F 0 "C1" H 5575 2550 50  0000 L CNN
F 1 "100u" H 5575 2350 50  0000 L CNN
F 2 "" H 5588 2300 50  0000 C CNN
F 3 "" H 5550 2450 50  0000 C CNN
	1    5550 2450
	1    0    0    -1  
$EndComp
Wire Wire Line
	5150 2800 5350 2800
Wire Wire Line
	5350 2800 5350 2600
Wire Wire Line
	5350 2600 5550 2600
Wire Wire Line
	5550 2600 5950 2600
Wire Wire Line
	5150 2700 5200 2700
Wire Wire Line
	5200 2700 5200 2300
Wire Wire Line
	5200 2300 5550 2300
Wire Wire Line
	3550 2700 3950 2700
Wire Wire Line
	3550 2800 3950 2800
Wire Wire Line
	3550 2900 3950 2900
Wire Wire Line
	3550 3000 3950 3000
Wire Wire Line
	3950 3100 3950 3200
Wire Wire Line
	3550 3300 3950 3300
Wire Wire Line
	3550 3400 3950 3400
Wire Wire Line
	5250 3300 5150 3300
Text GLabel 2650 3700 0    60   Input ~ 0
ITF-A_gnd
Text GLabel 2650 4000 0    60   Input ~ 0
ITF-S_3_3v
Text GLabel 5200 2300 0    60   Input ~ 0
ITF-F_12v
Connection ~ 5550 2600
Text GLabel 5950 2600 2    60   Input ~ 0
ITF-A_gnd
$Comp
L CP C2
U 1 1 58EDFF91
P 2850 3850
F 0 "C2" H 2875 3950 50  0000 L CNN
F 1 "10u" H 2875 3750 50  0000 L CNN
F 2 "" H 2888 3700 50  0001 C CNN
F 3 "" H 2850 3850 50  0001 C CNN
	1    2850 3850
	1    0    0    1   
$EndComp
Wire Wire Line
	2650 3700 2850 3700
Wire Wire Line
	2850 3700 5150 3700
Connection ~ 2850 3700
Wire Wire Line
	5150 3700 5150 3400
Wire Wire Line
	5250 4000 5250 3300
Wire Wire Line
	2650 4000 2850 4000
Wire Wire Line
	2850 4000 5250 4000
Connection ~ 2850 4000
Text GLabel 3550 2700 0    60   Input ~ 0
RP_E1_DIO5_N
Text GLabel 3550 2800 0    60   Input ~ 0
RP_E1_DIO4_N
Text GLabel 3550 2900 0    60   Input ~ 0
RP_E1_DIO3_N
Text GLabel 3550 3000 0    60   Input ~ 0
RP_E1_DIO2_N
Text GLabel 3550 3300 0    60   Input ~ 0
RP_E1_DIO1_N
Text GLabel 3550 3400 0    60   Input ~ 0
RP_E1_DIO0_N
$EndSCHEMATC
