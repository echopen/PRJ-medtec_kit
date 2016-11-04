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
LIBS:DB_Supply_V2-cache
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
U 1 1 57A84933
P 2700 2450
F 0 "P1" H 2700 3450 50  0000 C CNN
F 1 "CONN_01X19" V 2800 2450 50  0000 C CNN
F 2 "" H 2700 2450 50  0000 C CNN
F 3 "" H 2700 2450 50  0000 C CNN
	1    2700 2450
	-1   0    0    1   
$EndComp
$Comp
L CONN_01X19 P2
U 1 1 57A849B5
P 5150 2450
F 0 "P2" H 5150 3450 50  0000 C CNN
F 1 "CONN_01X19" V 5250 2450 50  0000 C CNN
F 2 "" H 5150 2450 50  0000 C CNN
F 3 "" H 5150 2450 50  0000 C CNN
	1    5150 2450
	1    0    0    1   
$EndComp
$Comp
L PYB30 U1
U 1 1 57A84A3A
P 3950 2750
F 0 "U1" H 3900 2550 60  0000 C CNN
F 1 "PYB30" H 3700 2700 60  0000 C CNN
F 2 "" H 3950 2750 60  0001 C CNN
F 3 "" H 3950 2750 60  0001 C CNN
	1    3950 2750
	1    0    0    -1  
$EndComp
Wire Wire Line
	2900 2250 3150 2250
Wire Wire Line
	3150 2250 3150 2350
Wire Wire Line
	3150 2350 3350 2350
Wire Wire Line
	2900 3350 3150 3350
Wire Wire Line
	3150 3350 3150 2500
Wire Wire Line
	3150 2500 3350 2500
Wire Wire Line
	4500 2800 4700 2800
Wire Wire Line
	4700 2800 4700 3350
Wire Wire Line
	4700 3350 4950 3350
Wire Wire Line
	4500 2350 4750 2350
Wire Wire Line
	4750 2350 4750 3250
Wire Wire Line
	4750 3250 4950 3250
Wire Wire Line
	4500 2500 4800 2500
Wire Wire Line
	4800 2500 4800 2850
Wire Wire Line
	4800 2850 4950 2850
Wire Wire Line
	4500 2650 4950 2650
NoConn ~ 4750 2500
NoConn ~ 4750 2650
$EndSCHEMATC
