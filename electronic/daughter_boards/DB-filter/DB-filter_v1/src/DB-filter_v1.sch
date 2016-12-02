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
LIBS:DB-filter_v1-cache
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
L C C1
U 1 1 57A4BA83
P 4600 3150
F 0 "C1" H 4625 3250 50  0000 L CNN
F 1 "1n" H 4625 3050 50  0000 L CNN
F 2 "Echopen:C_TH_common" H 4638 3000 50  0001 C CNN
F 3 "" H 4600 3150 50  0000 C CNN
F 4 "25V 10%" H 4600 3150 60  0001 C CNN "Caracteristic"
F 5 "AVX" H 4600 3150 60  0001 C CNN "Manufacturer"
F 6 "SR151C102KAA" H 4600 3150 60  0001 C CNN "Ref Manufacturer"
	1    4600 3150
	0    1    1    0   
$EndComp
$Comp
L INDUCTOR L1
U 1 1 57A4BB11
P 5050 3150
F 0 "L1" V 5000 3150 50  0000 C CNN
F 1 "10u" V 5150 3150 50  0000 C CNN
F 2 "Echopen:INDUCTOR_TH_common" H 5050 3150 50  0001 C CNN
F 3 "" H 5050 3150 50  0000 C CNN
F 4 "10% 550mA" V 5050 3150 60  0001 C CNN "Caracteristic"
F 5 "Bourns" V 5050 3150 60  0001 C CNN "Manufacturer"
F 6 "RLB0608-100KL" V 5050 3150 60  0001 C CNN "Ref Manufacturer"
	1    5050 3150
	0    1    -1   0   
$EndComp
$Comp
L R R1
U 1 1 57A4BBB6
P 5350 3300
F 0 "R1" V 5430 3300 50  0000 C CNN
F 1 "330" V 5350 3300 50  0000 C CNN
F 2 "Echopen:Resistor_TH_common" V 5280 3300 50  0001 C CNN
F 3 "" H 5350 3300 50  0000 C CNN
F 4 "1/4W 5%" V 5350 3300 60  0001 C CNN "Caracteristic"
F 5 "KOA speer" V 5350 3300 60  0001 C CNN "Manufacturer"
F 6 "MF1/4LCT52R331J" V 5350 3300 60  0001 C CNN "Ref Manufacturer"
	1    5350 3300
	1    0    0    -1  
$EndComp
$Comp
L CONN_01X19 P1
U 1 1 57A84EF6
P 4100 3400
F 0 "P1" H 4100 4400 50  0000 C CNN
F 1 "CONN_01X19" V 4200 3400 50  0000 C CNN
F 2 "Echopen:Header_pin_angled_1x19" H 4100 3400 50  0001 C CNN
F 3 "" H 4100 3400 50  0000 C CNN
F 4 "angled pin header 1*19" H 4100 3400 60  0001 C CNN "Caracteristic"
F 5 "Molex" H 4100 3400 60  0001 C CNN "Manufacturer"
F 6 "22-28-8192" H 4100 3400 60  0001 C CNN "Ref Manufacturer"
	1    4100 3400
	-1   0    0    1   
$EndComp
Wire Wire Line
	5350 4300 5350 3450
Connection ~ 5350 4300
Wire Wire Line
	5350 3150 5550 3150
Wire Wire Line
	5550 3150 5550 4000
Wire Wire Line
	4400 3150 4400 4100
Wire Wire Line
	4400 3150 4450 3150
Wire Wire Line
	4400 4100 4300 4100
Connection ~ 5350 3150
NoConn ~ 4300 2500
NoConn ~ 4300 2600
NoConn ~ 4300 2700
NoConn ~ 4300 2800
NoConn ~ 4300 2900
NoConn ~ 4300 3000
NoConn ~ 4300 3100
NoConn ~ 4300 3200
NoConn ~ 4300 3300
NoConn ~ 4300 3400
NoConn ~ 4300 3500
NoConn ~ 4300 3600
NoConn ~ 4300 3700
NoConn ~ 4300 3800
NoConn ~ 4300 3900
NoConn ~ 4300 4200
$Comp
L PWR_FLAG #FLG01
U 1 1 57AC9F7F
P 4750 4300
F 0 "#FLG01" H 4750 4395 50  0001 C CNN
F 1 "PWR_FLAG" H 4750 4480 50  0000 C CNN
F 2 "" H 4750 4300 50  0000 C CNN
F 3 "" H 4750 4300 50  0000 C CNN
	1    4750 4300
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR02
U 1 1 57AC9FA2
P 4750 4300
F 0 "#PWR02" H 4750 4050 50  0001 C CNN
F 1 "GND" H 4750 4150 50  0000 C CNN
F 2 "" H 4750 4300 50  0000 C CNN
F 3 "" H 4750 4300 50  0000 C CNN
	1    4750 4300
	1    0    0    -1  
$EndComp
Connection ~ 4750 4300
Connection ~ 5550 4000
Wire Wire Line
	5550 4000 4300 4000
Wire Wire Line
	4300 4300 5350 4300
$EndSCHEMATC
