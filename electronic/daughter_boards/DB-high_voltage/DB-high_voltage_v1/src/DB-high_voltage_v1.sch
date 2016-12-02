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
LIBS:DB-high_voltage_v1-cache
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
L LM555N U1
U 1 1 57A21C9E
P 2350 2100
F 0 "U1" H 1950 2450 50  0000 L CNN
F 1 "LM555N" H 1950 1750 50  0000 L CNN
F 2 "Echopen:DIP-8(LM555)" H 2350 2100 50  0001 C CNN
F 3 "" H 2350 2100 50  0000 C CNN
F 4 "NA" H 2350 2100 60  0001 C CNN "Caracteristic"
F 5 "TI" H 2350 2100 60  0001 C CNN "Manufacturer"
F 6 "LM555CN/NOPB" H 2350 2100 60  0001 C CNN "Ref Manufacturer"
	1    2350 2100
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 57A21C9F
P 1900 2700
F 0 "C1" H 1925 2800 50  0000 L CNN
F 1 "10n" H 1925 2600 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 1938 2550 50  0001 C CNN
F 3 "" H 1900 2700 50  0000 C CNN
F 4 "25V 10%" H 1900 2700 60  0001 C CNN "Caracteristic"
F 5 "Vishay" H 1900 2700 60  0001 C CNN "Manufacturer"
F 6 "K103K15X7RF5UH5" H 1900 2700 60  0001 C CNN "Ref Manufacturer"
	1    1900 2700
	0    1    1    0   
$EndComp
$Comp
L R R2
U 1 1 57A21CA0
P 3150 2150
F 0 "R2" V 3230 2150 50  0000 C CNN
F 1 "12k" V 3150 2150 50  0000 C CNN
F 2 "Echopen:Resistor_TH_common" V 3080 2150 50  0001 C CNN
F 3 "" H 3150 2150 50  0000 C CNN
F 4 "1/4W 5%" V 3150 2150 60  0001 C CNN "Caracteristic"
F 5 "KOA speer" V 3150 2150 60  0001 C CNN "Manufacturer"
F 6 "MF1/4LCT52R123J" V 3150 2150 60  0001 C CNN "Ref Manufacturer"
	1    3150 2150
	1    0    0    -1  
$EndComp
NoConn ~ 1750 2300
NoConn ~ 1600 2300
$Comp
L R R1
U 1 1 57A21CA1
P 2900 1500
F 0 "R1" V 2980 1500 50  0000 C CNN
F 1 "2.2k" V 2900 1500 50  0000 C CNN
F 2 "Echopen:Resistor_TH_common" V 2830 1500 50  0001 C CNN
F 3 "" H 2900 1500 50  0000 C CNN
F 4 "1/4W 5%" V 2900 1500 60  0001 C CNN "Caracteristic"
F 5 "KOA speer" V 2900 1500 60  0001 C CNN "Manufacturer"
F 6 "MF1/4LCT52R222J" V 2900 1500 60  0001 C CNN "Ref Manufacturer"
	1    2900 1500
	0    1    1    0   
$EndComp
NoConn ~ 3150 1900
NoConn ~ 1750 2300
NoConn ~ 1600 2300
NoConn ~ 3150 1900
NoConn ~ 1750 2300
NoConn ~ 1600 2300
NoConn ~ 3150 1900
NoConn ~ 1750 2300
NoConn ~ 1600 2300
NoConn ~ 3150 1900
$Comp
L C C2
U 1 1 57A21CB2
P 3150 2550
F 0 "C2" H 3175 2650 50  0000 L CNN
F 1 "47n" H 3175 2450 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 3188 2400 50  0001 C CNN
F 3 "" H 3150 2550 50  0000 C CNN
F 4 "25V 10%" H 3150 2550 60  0001 C CNN "Caracteristic"
F 5 "Vishay" H 3150 2550 60  0001 C CNN "Manufacturer"
F 6 "1C10Z5U473M050B" H 3150 2550 60  0001 C CNN "Ref Manufacturer"
	1    3150 2550
	-1   0    0    1   
$EndComp
NoConn ~ 1750 2550
Text Label 8150 7650 0    60   ~ 0
08/06/2016
Text Label 7400 7500 0    60   ~ 0
Alimentation_Symétrique_+/-_5V;12V
Wire Wire Line
	1200 2300 1850 2300
Wire Wire Line
	1850 2100 1750 2100
Wire Wire Line
	3150 1500 3050 1500
Wire Wire Line
	1850 1900 1600 1900
Wire Wire Line
	1600 1900 1600 2550
Wire Wire Line
	1600 2550 2900 2550
Wire Wire Line
	2900 2550 2900 2300
Wire Wire Line
	2850 2300 3150 2300
Wire Wire Line
	1750 2100 1750 2700
Wire Wire Line
	2050 2700 3150 2700
Wire Wire Line
	3150 2300 3150 2400
Wire Wire Line
	2850 2100 2950 2100
Wire Wire Line
	2950 2100 2950 2000
Connection ~ 2900 2300
Connection ~ 3150 2300
Connection ~ 3150 2000
Wire Wire Line
	2950 2000 3150 2000
Wire Wire Line
	3150 2000 3150 1500
Wire Wire Line
	1150 1400 5000 1400
Connection ~ 4100 1700
Connection ~ 4700 1700
Connection ~ 5000 1800
Wire Wire Line
	3500 1900 2850 1900
Connection ~ 5000 2200
Wire Wire Line
	4100 2100 4100 2850
Wire Wire Line
	5000 1800 5600 1800
Connection ~ 4100 1400
Wire Wire Line
	4100 1700 4700 1700
Wire Wire Line
	4700 1600 4700 2000
$Comp
L R R3
U 1 1 57A21CB1
P 3650 1900
F 0 "R3" V 3730 1900 50  0000 C CNN
F 1 "3.3k" V 3650 1900 50  0000 C CNN
F 2 "Echopen:Resistor_TH_common" V 3580 1900 50  0001 C CNN
F 3 "" H 3650 1900 50  0000 C CNN
F 4 "1/4W 5%" V 3650 1900 60  0001 C CNN "Caracteristic"
F 5 "KOA speer" V 3650 1900 60  0001 C CNN "Manufacturer"
F 6 "MF1/4LCT52R332J" V 3650 1900 60  0001 C CNN "Ref Manufacturer"
	1    3650 1900
	0    1    1    0   
$EndComp
$Comp
L R R4
U 1 1 57A21CA9
P 4100 1550
F 0 "R4" V 4180 1550 50  0000 C CNN
F 1 "1.8k" V 4100 1550 50  0000 C CNN
F 2 "Echopen:Resistor_TH_common" V 4030 1550 50  0001 C CNN
F 3 "" H 4100 1550 50  0000 C CNN
F 4 "1/4W 5%" V 4100 1550 60  0001 C CNN "Caracteristic"
F 5 "KOA speer" V 4100 1550 60  0001 C CNN "Manufacturer"
F 6 "MF1/4LCT52R182G" V 4100 1550 60  0001 C CNN "Ref Manufacturer"
	1    4100 1550
	1    0    0    -1  
$EndComp
Wire Wire Line
	4100 2200 6050 2200
Wire Wire Line
	2350 2500 2350 3000
Wire Wire Line
	2350 2850 10200 2850
Connection ~ 4100 2200
Connection ~ 2350 2700
NoConn ~ 2350 2550
$Comp
L CP C3
U 1 1 57A23487
P 5750 1800
F 0 "C3" H 5775 1900 50  0000 L CNN
F 1 "47u" H 5775 1700 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 5788 1650 50  0001 C CNN
F 3 "" H 5750 1800 50  0000 C CNN
F 4 "25V 20%" H 5750 1800 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 5750 1800 60  0001 C CNN "Manufacturer"
F 6 "UVR1E470MDD6" H 5750 1800 60  0001 C CNN "Ref Manufacturer"
	1    5750 1800
	0    -1   1    0   
$EndComp
$Comp
L D D1
U 1 1 57A235BA
P 6050 1950
F 0 "D1" H 6050 2050 50  0000 C CNN
F 1 "1N4148" H 6050 1850 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 6050 1950 50  0001 C CNN
F 3 "" H 6050 1950 50  0000 C CNN
F 4 "NA" H 6050 1950 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 6050 1950 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 6050 1950 60  0001 C CNN "Ref Manufacturer"
	1    6050 1950
	0    1    -1   0   
$EndComp
Connection ~ 6050 1800
Wire Wire Line
	5900 1800 6450 1800
Wire Wire Line
	6050 2200 6050 2100
$Comp
L CP C4
U 1 1 57A26CAB
P 6200 2200
F 0 "C4" H 6225 2300 50  0000 L CNN
F 1 "4.7u" H 6225 2100 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 6238 2050 50  0001 C CNN
F 3 "" H 6200 2200 50  0000 C CNN
F 4 "25V 20%" H 6200 2200 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 6200 2200 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 6200 2200 60  0001 C CNN "Ref Manufacturer"
	1    6200 2200
	0    -1   1    0   
$EndComp
Wire Wire Line
	6400 1850 6400 1800
Connection ~ 6400 1800
Wire Wire Line
	6350 2200 6950 2200
Wire Wire Line
	6400 2200 6400 2150
Wire Wire Line
	6850 2200 6850 2150
Connection ~ 6400 2200
Wire Wire Line
	6750 1800 7350 1800
Wire Wire Line
	6850 1800 6850 1850
Connection ~ 6850 2200
Connection ~ 6850 1800
Wire Wire Line
	7300 1850 7300 1800
Connection ~ 7300 1800
Wire Wire Line
	7250 2200 7850 2200
Wire Wire Line
	7300 2200 7300 2150
Wire Wire Line
	7750 2200 7750 2150
Connection ~ 7300 2200
Wire Wire Line
	7650 1800 8250 1800
Wire Wire Line
	7750 1800 7750 1850
Connection ~ 7750 2200
Connection ~ 7750 1800
Wire Wire Line
	8200 1850 8200 1800
Connection ~ 8200 1800
Wire Wire Line
	8150 2200 8750 2200
Wire Wire Line
	8200 2200 8200 2150
Wire Wire Line
	8650 2200 8650 2150
Connection ~ 8200 2200
Wire Wire Line
	8550 1800 9150 1800
Wire Wire Line
	8650 1800 8650 1850
Connection ~ 8650 2200
Connection ~ 8650 1800
Wire Wire Line
	9100 1850 9100 1800
Connection ~ 9100 1800
Wire Wire Line
	9050 2200 9650 2200
Wire Wire Line
	9100 2200 9100 2150
Wire Wire Line
	9550 2200 9550 2150
Connection ~ 9100 2200
Wire Wire Line
	9450 1800 10050 1800
Wire Wire Line
	9550 1800 9550 1850
Connection ~ 9550 2200
Connection ~ 9550 1800
Wire Wire Line
	10000 1850 10000 1800
Connection ~ 10000 1800
Wire Wire Line
	9950 2200 10450 2200
Wire Wire Line
	10000 2200 10000 2150
Wire Wire Line
	10450 2200 10450 2150
Connection ~ 10000 2200
Wire Wire Line
	10350 1800 10650 1800
Wire Wire Line
	10450 1800 10450 1850
Connection ~ 10450 2200
Connection ~ 10450 1800
Wire Wire Line
	10650 1800 10650 2550
$Comp
L CP C14
U 1 1 57A286FF
P 10350 2850
F 0 "C14" H 10375 2950 50  0000 L CNN
F 1 "4.7u" H 10375 2750 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 10388 2700 50  0001 C CNN
F 3 "" H 10350 2850 50  0000 C CNN
F 4 "150V 20%" H 10350 2850 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 10350 2850 60  0001 C CNN "Manufacturer"
F 6 "UVR2C4R7MED1TD" H 10350 2850 60  0001 C CNN "Ref Manufacturer"
	1    10350 2850
	0    -1   -1   0   
$EndComp
Wire Wire Line
	10650 2850 10500 2850
Connection ~ 4100 2850
$Comp
L CONN_01X19 P1
U 1 1 57A85897
P 700 2100
F 0 "P1" H 700 3100 50  0000 C CNN
F 1 "CONN_01X19" V 800 2100 50  0000 C CNN
F 2 "Echopen:Header_pin_angled_1x19" H 700 2100 50  0001 C CNN
F 3 "" H 700 2100 50  0000 C CNN
F 4 "angled pin header 1*19" H 700 2100 60  0001 C CNN "Caracteristic"
F 5 "Molex" H 700 2100 60  0001 C CNN "Manufacturer"
F 6 "22-28-8192" H 700 2100 60  0001 C CNN "Ref Manufacturer"
	1    700  2100
	-1   0    0    1   
$EndComp
Wire Wire Line
	900  2900 1200 2900
Wire Wire Line
	1200 2900 1200 2300
Wire Wire Line
	2350 3000 900  3000
Connection ~ 2350 2850
Wire Wire Line
	1150 1400 1150 1900
Wire Wire Line
	1150 1900 900  1900
Wire Wire Line
	9250 2850 9250 3400
Connection ~ 9250 2850
Wire Wire Line
	10500 2850 10500 3000
Wire Wire Line
	10500 3000 9850 3000
$Comp
L CONN_01X02 P2
U 1 1 57A8658A
P 9650 3150
F 0 "P2" H 9650 3300 50  0000 C CNN
F 1 "CONN_01X02" V 9750 3150 50  0000 C CNN
F 2 "Echopen:Socket_1x02" H 9650 3150 50  0001 C CNN
F 3 "" H 9650 3150 50  0000 C CNN
F 4 "NA" H 9650 3150 60  0001 C CNN "Caracteristic"
F 5 "Molex" H 9650 3150 60  0001 C CNN "Manufacturer"
F 6 "22-15-2026" H 9650 3150 60  0001 C CNN "Ref Manufacturer"
	1    9650 3150
	-1   0    0    -1  
$EndComp
$Comp
L SMA P3
U 1 1 57A88278
P 10300 3200
F 0 "P3" H 10310 3320 50  0000 C CNN
F 1 "SMA" V 10410 3140 50  0000 C CNN
F 2 "Echopen:SMA" H 10300 3200 50  0001 C CNN
F 3 "" H 10300 3200 50  0000 C CNN
F 4 "NA" H 10300 3200 60  0001 C CNN "Caracteristic"
F 5 "Johnson / Cinch Connectivity Solutions" H 10300 3200 60  0001 C CNN "Manufacturer"
F 6 "142-0701-801" H 10300 3200 60  0001 C CNN "Ref Manufacturer"
	1    10300 3200
	1    0    0    -1  
$EndComp
Wire Wire Line
	9850 3000 9850 3100
Wire Wire Line
	10150 3000 10150 3200
Connection ~ 10150 3000
Wire Wire Line
	9850 3200 9850 3400
Connection ~ 9850 3400
Connection ~ 10300 3400
$Comp
L PWR_FLAG #FLG01
U 1 1 57B20A7B
P 6150 2850
F 0 "#FLG01" H 6150 2945 50  0001 C CNN
F 1 "PWR_FLAG" H 6150 3030 50  0000 C CNN
F 2 "" H 6150 2850 50  0000 C CNN
F 3 "" H 6150 2850 50  0000 C CNN
	1    6150 2850
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR02
U 1 1 57B20ADB
P 6150 2850
F 0 "#PWR02" H 6150 2600 50  0001 C CNN
F 1 "GND" H 6150 2700 50  0000 C CNN
F 2 "" H 6150 2850 50  0000 C CNN
F 3 "" H 6150 2850 50  0000 C CNN
	1    6150 2850
	1    0    0    -1  
$EndComp
Connection ~ 6150 2850
$Comp
L PWR_FLAG #FLG03
U 1 1 57B20C47
P 2350 1500
F 0 "#FLG03" H 2350 1595 50  0001 C CNN
F 1 "PWR_FLAG" H 2350 1680 50  0000 C CNN
F 2 "" H 2350 1500 50  0000 C CNN
F 3 "" H 2350 1500 50  0000 C CNN
	1    2350 1500
	1    0    0    -1  
$EndComp
NoConn ~ 900  1200
NoConn ~ 900  1300
NoConn ~ 900  1400
NoConn ~ 900  1500
NoConn ~ 900  1600
NoConn ~ 900  1700
NoConn ~ 900  1800
NoConn ~ 900  2000
NoConn ~ 900  2100
NoConn ~ 900  2200
NoConn ~ 900  2300
NoConn ~ 900  2400
NoConn ~ 900  2500
NoConn ~ 900  2600
NoConn ~ 900  2700
NoConn ~ 900  2800
Connection ~ 1400 2300
Wire Wire Line
	1400 2300 1400 1500
Wire Wire Line
	1400 1500 2750 1500
Connection ~ 2350 1500
Wire Wire Line
	2350 1700 2350 1500
$Comp
L 2N2907 Q3
U 1 1 57B37A66
P 4900 2000
F 0 "Q3" H 5100 2075 50  0000 L CNN
F 1 "2N2907" H 5100 2000 50  0000 L CNN
F 2 "Echopen:TO-18_TH_common" H 5200 1850 50  0001 L CIN
F 3 "" H 4900 2000 50  0000 L CNN
F 4 "NA" H 4900 2000 60  0001 C CNN "Caracteristic"
F 5 "Central Seminconductor" H 4900 2000 60  0001 C CNN "Manufacturer"
F 6 "2N2907A" H 4900 2000 60  0001 C CNN "Ref Manufacturer"
	1    4900 2000
	1    0    0    1   
$EndComp
$Comp
L 2N2222 Q1
U 1 1 57B45C8E
P 4000 1900
F 0 "Q1" H 4200 1975 50  0000 L CNN
F 1 "2N2222" H 4200 1900 50  0000 L CNN
F 2 "Echopen:TO-18_TH_common" H 4200 1825 50  0001 L CIN
F 3 "" H 4000 1900 50  0000 L CNN
F 4 "NA" H 4000 1900 60  0001 C CNN "Caracteristic"
F 5 "Central Semiconductor" H 4000 1900 60  0001 C CNN "Manufacturer"
F 6 "2N2222" H 4000 1900 60  0001 C CNN "Ref Manufacturer"
	1    4000 1900
	1    0    0    -1  
$EndComp
$Comp
L 2N2222 Q2
U 1 1 57B45D33
P 4900 1600
F 0 "Q2" H 5100 1675 50  0000 L CNN
F 1 "2N2222" H 5100 1600 50  0000 L CNN
F 2 "Echopen:TO-18_TH_common" H 5100 1525 50  0001 L CIN
F 3 "" H 4900 1600 50  0000 L CNN
F 4 "NA" H 4900 1600 60  0001 C CNN "Caracteristic"
F 5 "Central Seminconductor" H 4900 1600 60  0001 C CNN "Manufacturer"
F 6 "2N2222" H 4900 1600 60  0001 C CNN "Ref Manufacturer"
	1    4900 1600
	1    0    0    -1  
$EndComp
Wire Wire Line
	9250 3400 10300 3400
$Comp
L D D2
U 1 1 5840726A
P 6400 2000
F 0 "D2" H 6400 2100 50  0000 C CNN
F 1 "1N4148" H 6400 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 6400 2000 50  0001 C CNN
F 3 "" H 6400 2000 50  0000 C CNN
F 4 "NA" H 6400 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 6400 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 6400 2000 60  0001 C CNN "Ref Manufacturer"
	1    6400 2000
	0    1    1    0   
$EndComp
$Comp
L D D3
U 1 1 58407648
P 6850 2000
F 0 "D3" H 6850 2100 50  0000 C CNN
F 1 "1N4148" H 6850 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 6850 2000 50  0001 C CNN
F 3 "" H 6850 2000 50  0000 C CNN
F 4 "NA" H 6850 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 6850 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 6850 2000 60  0001 C CNN "Ref Manufacturer"
	1    6850 2000
	0    1    -1   0   
$EndComp
$Comp
L D D4
U 1 1 5840786B
P 7300 2000
F 0 "D4" H 7300 2100 50  0000 C CNN
F 1 "1N4148" H 7300 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 7300 2000 50  0001 C CNN
F 3 "" H 7300 2000 50  0000 C CNN
F 4 "NA" H 7300 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 7300 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 7300 2000 60  0001 C CNN "Ref Manufacturer"
	1    7300 2000
	0    1    1    0   
$EndComp
$Comp
L D D5
U 1 1 58407B0B
P 7750 2000
F 0 "D5" H 7750 2100 50  0000 C CNN
F 1 "1N4148" H 7750 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 7750 2000 50  0001 C CNN
F 3 "" H 7750 2000 50  0000 C CNN
F 4 "NA" H 7750 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 7750 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 7750 2000 60  0001 C CNN "Ref Manufacturer"
	1    7750 2000
	0    1    -1   0   
$EndComp
$Comp
L D D6
U 1 1 58407CD6
P 8200 2000
F 0 "D6" H 8200 2100 50  0000 C CNN
F 1 "1N4148" H 8200 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 8200 2000 50  0001 C CNN
F 3 "" H 8200 2000 50  0000 C CNN
F 4 "NA" H 8200 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 8200 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 8200 2000 60  0001 C CNN "Ref Manufacturer"
	1    8200 2000
	0    1    1    0   
$EndComp
$Comp
L D D7
U 1 1 58407E97
P 8650 2000
F 0 "D7" H 8650 2100 50  0000 C CNN
F 1 "1N4148" H 8650 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 8650 2000 50  0001 C CNN
F 3 "" H 8650 2000 50  0000 C CNN
F 4 "NA" H 8650 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 8650 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 8650 2000 60  0001 C CNN "Ref Manufacturer"
	1    8650 2000
	0    1    -1   0   
$EndComp
$Comp
L D D8
U 1 1 5840805C
P 9100 2000
F 0 "D8" H 9100 2100 50  0000 C CNN
F 1 "1N4148" H 9100 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 9100 2000 50  0001 C CNN
F 3 "" H 9100 2000 50  0000 C CNN
F 4 "NA" H 9100 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 9100 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 9100 2000 60  0001 C CNN "Ref Manufacturer"
	1    9100 2000
	0    1    1    0   
$EndComp
$Comp
L D D9
U 1 1 58408223
P 9550 2000
F 0 "D9" H 9550 2100 50  0000 C CNN
F 1 "1N4148" H 9550 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 9550 2000 50  0001 C CNN
F 3 "" H 9550 2000 50  0000 C CNN
F 4 "NA" H 9550 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 9550 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 9550 2000 60  0001 C CNN "Ref Manufacturer"
	1    9550 2000
	0    1    -1   0   
$EndComp
$Comp
L D D10
U 1 1 584083E0
P 10000 2000
F 0 "D10" H 10000 2100 50  0000 C CNN
F 1 "1N4148" H 10000 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 10000 2000 50  0001 C CNN
F 3 "" H 10000 2000 50  0000 C CNN
F 4 "NA" H 10000 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 10000 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 10000 2000 60  0001 C CNN "Ref Manufacturer"
	1    10000 2000
	0    1    1    0   
$EndComp
$Comp
L D D11
U 1 1 584085A3
P 10450 2000
F 0 "D11" H 10450 2100 50  0000 C CNN
F 1 "1N4148" H 10450 1900 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 10450 2000 50  0001 C CNN
F 3 "" H 10450 2000 50  0000 C CNN
F 4 "NA" H 10450 2000 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 10450 2000 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 10450 2000 60  0001 C CNN "Ref Manufacturer"
	1    10450 2000
	0    1    -1   0   
$EndComp
$Comp
L D D12
U 1 1 58408764
P 10650 2700
F 0 "D12" H 10650 2800 50  0000 C CNN
F 1 "1N4148" H 10650 2600 50  0000 C CNN
F 2 "Echopen:D_TH_common" H 10650 2700 50  0001 C CNN
F 3 "" H 10650 2700 50  0000 C CNN
F 4 "NA" H 10650 2700 60  0001 C CNN "Caracteristic"
F 5 "Fairchild Semiconductor" H 10650 2700 60  0001 C CNN "Manufacturer"
F 6 "1N4148" H 10650 2700 60  0001 C CNN "Ref Manufacturer"
	1    10650 2700
	0    1    1    0   
$EndComp
$Comp
L CP C5
U 1 1 58408B8B
P 6600 1800
F 0 "C5" H 6625 1900 50  0000 L CNN
F 1 "4.7u" H 6625 1700 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 6638 1650 50  0001 C CNN
F 3 "" H 6600 1800 50  0000 C CNN
F 4 "25V 20%" H 6600 1800 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 6600 1800 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 6600 1800 60  0001 C CNN "Ref Manufacturer"
	1    6600 1800
	0    -1   1    0   
$EndComp
$Comp
L CP C6
U 1 1 58408C33
P 7100 2200
F 0 "C6" H 7125 2300 50  0000 L CNN
F 1 "4.7u" H 7125 2100 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 7138 2050 50  0001 C CNN
F 3 "" H 7100 2200 50  0000 C CNN
F 4 "25V 20%" H 7100 2200 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 7100 2200 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 7100 2200 60  0001 C CNN "Ref Manufacturer"
	1    7100 2200
	0    -1   1    0   
$EndComp
$Comp
L CP C7
U 1 1 58408CE1
P 7500 1800
F 0 "C7" H 7525 1900 50  0000 L CNN
F 1 "4.7u" H 7525 1700 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 7538 1650 50  0001 C CNN
F 3 "" H 7500 1800 50  0000 C CNN
F 4 "25V 20%" H 7500 1800 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 7500 1800 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 7500 1800 60  0001 C CNN "Ref Manufacturer"
	1    7500 1800
	0    -1   1    0   
$EndComp
$Comp
L CP C8
U 1 1 58408DAD
P 8000 2200
F 0 "C8" H 8025 2300 50  0000 L CNN
F 1 "4.7u" H 8025 2100 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 8038 2050 50  0001 C CNN
F 3 "" H 8000 2200 50  0000 C CNN
F 4 "25V 20%" H 8000 2200 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 8000 2200 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 8000 2200 60  0001 C CNN "Ref Manufacturer"
	1    8000 2200
	0    -1   1    0   
$EndComp
$Comp
L CP C9
U 1 1 58408E6F
P 8400 1800
F 0 "C9" H 8425 1900 50  0000 L CNN
F 1 "4.7u" H 8425 1700 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 8438 1650 50  0001 C CNN
F 3 "" H 8400 1800 50  0000 C CNN
F 4 "25V 20%" H 8400 1800 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 8400 1800 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 8400 1800 60  0001 C CNN "Ref Manufacturer"
	1    8400 1800
	0    -1   1    0   
$EndComp
$Comp
L CP C10
U 1 1 58408F21
P 8900 2200
F 0 "C10" H 8925 2300 50  0000 L CNN
F 1 "4.7u" H 8925 2100 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 8938 2050 50  0001 C CNN
F 3 "" H 8900 2200 50  0000 C CNN
F 4 "25V 20%" H 8900 2200 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 8900 2200 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 8900 2200 60  0001 C CNN "Ref Manufacturer"
	1    8900 2200
	0    -1   1    0   
$EndComp
$Comp
L CP C11
U 1 1 58408FD9
P 9300 1800
F 0 "C11" H 9325 1900 50  0000 L CNN
F 1 "4.7u" H 9325 1700 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 9338 1650 50  0001 C CNN
F 3 "" H 9300 1800 50  0000 C CNN
F 4 "25V 20%" H 9300 1800 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 9300 1800 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 9300 1800 60  0001 C CNN "Ref Manufacturer"
	1    9300 1800
	0    -1   1    0   
$EndComp
$Comp
L CP C12
U 1 1 58409097
P 9800 2200
F 0 "C12" H 9825 2300 50  0000 L CNN
F 1 "4.7u" H 9825 2100 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 9838 2050 50  0001 C CNN
F 3 "" H 9800 2200 50  0000 C CNN
F 4 "25V 20%" H 9800 2200 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 9800 2200 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 9800 2200 60  0001 C CNN "Ref Manufacturer"
	1    9800 2200
	0    -1   1    0   
$EndComp
$Comp
L CP C13
U 1 1 58409165
P 10200 1800
F 0 "C13" H 10225 1900 50  0000 L CNN
F 1 "4.7u" H 10225 1700 50  0000 L CNN
F 2 "Echopen:CP_small_TH_echopen" H 10238 1650 50  0001 C CNN
F 3 "" H 10200 1800 50  0000 C CNN
F 4 "25V 20%" H 10200 1800 60  0001 C CNN "Caracteristic"
F 5 "Nichicon" H 10200 1800 60  0001 C CNN "Manufacturer"
F 6 "UMA1E4R7MDD" H 10200 1800 60  0001 C CNN "Ref Manufacturer"
	1    10200 1800
	0    -1   1    0   
$EndComp
$EndSCHEMATC
