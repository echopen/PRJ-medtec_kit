EESchema Schematic File Version 2
LIBS:MDL-motor_v1-rescue
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
LIBS:MDL-motor_v1-cache
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
L DC_Motor M1
U 1 1 5817033D
P 5550 3250
F 0 "M1" H 6150 3350 60  0000 C CNN
F 1 "DC_Motor" H 6150 3500 60  0000 C CNN
F 2 "" H 5550 3250 60  0000 C CNN
F 3 "" H 5550 3250 60  0000 C CNN
	1    5550 3250
	1    0    0    -1  
$EndComp
Text GLabel 5000 2950 0    60   Input ~ 0
ITF-B_5V
Text GLabel 5000 3150 0    60   Input ~ 0
ITF-A_gnd
Text GLabel 5000 3250 0    60   Input ~ 0
ITF-B_5V
Text GLabel 5000 3350 0    60   Input ~ 0
ITF-O_cc_motor_encoder
$EndSCHEMATC
