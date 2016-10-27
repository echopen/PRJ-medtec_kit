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
L D D1
U 1 1 57A4D48B
P 3100 2200
F 0 "D1" H 3100 2300 50  0000 C CNN
F 1 "1N60" H 3100 2100 50  0000 C CNN
F 2 "" H 3100 2200 50  0000 C CNN
F 3 "" H 3100 2200 50  0000 C CNN
	1    3100 2200
	-1   0    0    -1  
$EndComp
$Comp
L R R1
U 1 1 57A4D538
P 3350 2350
F 0 "R1" V 3430 2350 50  0000 C CNN
F 1 "3.9k" V 3350 2350 50  0000 C CNN
F 2 "" V 3280 2350 50  0000 C CNN
F 3 "" H 3350 2350 50  0000 C CNN
	1    3350 2350
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 57A4D575
P 3600 2350
F 0 "C1" H 3625 2450 50  0000 L CNN
F 1 "10p" H 3625 2250 50  0000 L CNN
F 2 "" H 3638 2200 50  0000 C CNN
F 3 "" H 3600 2350 50  0000 C CNN
	1    3600 2350
	1    0    0    -1  
$EndComp
Wire Wire Line
	3250 2200 3600 2200
Wire Wire Line
	3350 2500 3600 2500
$Comp
L GND #PWR1
U 1 1 57A4D5CE
P 3350 2500
F 0 "#PWR1" H 3350 2250 50  0001 C CNN
F 1 "GND" H 3350 2350 50  0000 C CNN
F 2 "" H 3350 2500 50  0000 C CNN
F 3 "" H 3350 2500 50  0000 C CNN
	1    3350 2500
	1    0    0    -1  
$EndComp
Text GLabel 2950 2200 0    60   Input ~ 0
Input
Text GLabel 3600 2200 1    60   Input ~ 0
Output
$EndSCHEMATC
