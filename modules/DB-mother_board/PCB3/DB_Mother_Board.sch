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
L CONN_01X19 P1
U 1 1 57B344A5
P 5300 3050
F 0 "P1" H 5300 4050 50  0000 C CNN
F 1 "CONN_01X19" V 5400 3050 50  0000 C CNN
F 2 "Socket_Strips:Socket_Strip_Straight_1x19" H 5300 3050 50  0001 C CNN
F 3 "" H 5300 3050 50  0000 C CNN
	1    5300 3050
	-1   0    0    -1  
$EndComp
$Comp
L CONN_01X19 P2
U 1 1 57B344F4
P 6000 3050
F 0 "P2" H 6000 4050 50  0000 C CNN
F 1 "CONN_01X19" V 6100 3050 50  0000 C CNN
F 2 "Socket_Strips:Socket_Strip_Straight_1x19" H 6000 3050 50  0001 C CNN
F 3 "" H 6000 3050 50  0000 C CNN
	1    6000 3050
	1    0    0    -1  
$EndComp
Wire Wire Line
	5500 2150 5800 2150
Wire Wire Line
	5500 2250 5800 2250
Wire Wire Line
	5500 2350 5800 2350
Wire Wire Line
	5500 2450 5800 2450
Wire Wire Line
	5500 2550 5800 2550
Wire Wire Line
	5500 2650 5800 2650
Wire Wire Line
	5500 2750 5800 2750
Wire Wire Line
	5500 2850 5800 2850
Wire Wire Line
	5500 2950 5800 2950
Wire Wire Line
	5500 3050 5800 3050
Wire Wire Line
	5500 3150 5800 3150
Wire Wire Line
	5500 3250 5800 3250
Wire Wire Line
	5500 3350 5800 3350
Wire Wire Line
	5500 3450 5800 3450
Wire Wire Line
	5500 3550 5800 3550
Wire Wire Line
	5500 3650 5800 3650
Wire Wire Line
	5500 3750 5800 3750
Wire Wire Line
	5500 3850 5800 3850
Wire Wire Line
	5500 3950 5800 3950
$Comp
L PWR_FLAG #FLG01
U 1 1 57B3467B
P 5600 2150
F 0 "#FLG01" H 5600 2245 50  0001 C CNN
F 1 "PWR_FLAG" H 5600 2330 50  0000 C CNN
F 2 "" H 5600 2150 50  0000 C CNN
F 3 "" H 5600 2150 50  0000 C CNN
	1    5600 2150
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR02
U 1 1 57B34695
P 5600 2150
F 0 "#PWR02" H 5600 1900 50  0001 C CNN
F 1 "GND" H 5600 2000 50  0000 C CNN
F 2 "" H 5600 2150 50  0000 C CNN
F 3 "" H 5600 2150 50  0000 C CNN
	1    5600 2150
	1    0    0    -1  
$EndComp
Connection ~ 5600 2150
$EndSCHEMATC
