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
LIBS:motor project-cache
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
L ARDUINO_NANO SH1
U 1 1 57A9ABD4
P 2900 3050
F 0 "SH1" H 2900 2400 60  0000 C CNN
F 1 "ARDUINO_NANO" H 2900 4000 60  0000 C CNN
F 2 "" H 1975 2450 60  0000 C CNN
F 3 "" H 1975 2450 60  0000 C CNN
	1    2900 3050
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
	5350 2600 5950 2600
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
	2250 3800 2200 3800
Wire Wire Line
	2200 3800 2200 4100
Wire Wire Line
	2200 4100 5150 4100
Wire Wire Line
	5150 4100 5150 3400
Wire Wire Line
	2250 3600 2050 3600
Wire Wire Line
	2050 3600 2050 4200
Wire Wire Line
	2050 4200 5250 4200
Wire Wire Line
	5250 4200 5250 3300
Wire Wire Line
	5250 3300 5150 3300
Text GLabel 5150 3800 0    60   Input ~ 0
ITF-A_gnd
Text GLabel 2050 3600 0    60   Input ~ 0
ITF-B_5v
Text GLabel 5200 2300 0    60   Input ~ 0
ITF-F_12v
Connection ~ 5550 2600
Text GLabel 5950 2600 2    60   Input ~ 0
ITF-A_gnd
$EndSCHEMATC
