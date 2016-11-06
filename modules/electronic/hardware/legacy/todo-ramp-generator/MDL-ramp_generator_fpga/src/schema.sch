EESchema Schematic File Version 2
LIBS:Altera
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
LIBS:schema-cache
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
L FPGA_Pluto U1
U 1 1 577FA05E
P 4900 2650
F 0 "U1" H 4900 2750 60  0000 C CNN
F 1 "FPGA_Pluto" H 4900 2950 60  0000 C CNN
F 2 "" H 4900 2750 60  0000 C CNN
F 3 "" H 4900 2750 60  0000 C CNN
	1    4900 2650
	1    0    0    -1  
$EndComp
$Comp
L R R1
U 1 1 577FA098
P 3850 1900
F 0 "R1" V 3930 1900 50  0000 C CNN
F 1 "6.8k" V 3850 1900 50  0000 C CNN
F 2 "" V 3780 1900 50  0000 C CNN
F 3 "" H 3850 1900 50  0000 C CNN
	1    3850 1900
	0    1    1    0   
$EndComp
$Comp
L C C1
U 1 1 577FA123
P 3700 2200
F 0 "C1" H 3725 2300 50  0000 L CNN
F 1 "10n" H 3725 2100 50  0000 L CNN
F 2 "" H 3738 2050 50  0000 C CNN
F 3 "" H 3700 2200 50  0000 C CNN
	1    3700 2200
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR01
U 1 1 577FA18F
P 3700 2450
F 0 "#PWR01" H 3700 2200 50  0001 C CNN
F 1 "GND" H 3700 2300 50  0000 C CNN
F 2 "" H 3700 2450 50  0000 C CNN
F 3 "" H 3700 2450 50  0000 C CNN
	1    3700 2450
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR02
U 1 1 577FA1DC
P 5600 3600
F 0 "#PWR02" H 5600 3350 50  0001 C CNN
F 1 "GND" H 5600 3450 50  0000 C CNN
F 2 "" H 5600 3600 50  0000 C CNN
F 3 "" H 5600 3600 50  0000 C CNN
	1    5600 3600
	0    -1   -1   0   
$EndComp
Wire Wire Line
	5600 3600 5450 3600
Wire Wire Line
	3700 1900 3700 2050
Wire Wire Line
	3700 2350 3700 2450
Wire Wire Line
	4000 1900 4350 1900
Text GLabel 3700 1950 0    60   Input ~ 0
Output
Text Label 7450 7500 0    60   ~ 0
Ramp_generator_with_FPGA
Text Label 8250 7650 0    60   ~ 0
2016/07/08
$EndSCHEMATC
