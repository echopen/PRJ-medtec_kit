EESchema Schematic File Version 2
LIBS:MDL-tr_switch_v1-rescue
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
LIBS:MDL-tr_switch_v1-cache
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
L MD0100-RESCUE-MDL-tr_switch_v1 U1
U 1 1 57A4ADCE
P 4450 2900
F 0 "U1" H 4400 2850 60  0000 C CNN
F 1 "MD0100" H 4450 3050 60  0000 C CNN
F 2 "" H 4450 2900 60  0000 C CNN
F 3 "" H 4450 2900 60  0000 C CNN
	1    4450 2900
	1    0    0    -1  
$EndComp
Text GLabel 3900 2850 0    60   Input ~ 0
Pulser_Output
$Comp
L D D1
U 1 1 57A4AE58
P 5050 3000
F 0 "D1" H 5050 3100 50  0000 C CNN
F 1 "1N4148" H 5050 2900 50  0000 C CNN
F 2 "" H 5050 3000 50  0000 C CNN
F 3 "" H 5050 3000 50  0000 C CNN
	1    5050 3000
	0    1    1    0   
$EndComp
$Comp
L D D2
U 1 1 57A4AEBB
P 5350 3000
F 0 "D2" H 5350 3100 50  0000 C CNN
F 1 "1N4148" H 5350 2900 50  0000 C CNN
F 2 "" H 5350 3000 50  0000 C CNN
F 3 "" H 5350 3000 50  0000 C CNN
	1    5350 3000
	0    1    -1   0   
$EndComp
Wire Wire Line
	4950 2850 5350 2850
Wire Wire Line
	5050 3150 5350 3150
Text GLabel 5200 3250 0    60   Input ~ 0
ITF-A_gnd
Wire Wire Line
	5200 3150 5200 3250
Connection ~ 5200 3150
Text GLabel 5350 2850 2    60   Input ~ 0
Clipped_signal
$EndSCHEMATC
