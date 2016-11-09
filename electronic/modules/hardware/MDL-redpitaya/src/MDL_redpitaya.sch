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
$Comp
L RedPitaya U1
U 1 1 581CB9CE
P 5600 3500
F 0 "U1" H 5600 3350 60  0000 C CNN
F 1 "RedPitaya" H 5600 3650 60  0000 C CNN
F 2 "" H 5600 3500 60  0001 C CNN
F 3 "" H 5600 3500 60  0001 C CNN
	1    5600 3500
	1    0    0    -1  
$EndComp
Wire Wire Line
	5200 2700 5200 2500
Wire Wire Line
	5800 2700 5800 2500
Wire Wire Line
	5200 3250 5050 3250
Wire Wire Line
	5250 3800 5050 3800
Text GLabel 5200 2500 0    60   Input ~ 0
ITF-G_ramp
Text GLabel 5800 2500 2    60   Input ~ 0
ITF-E_signal_envelope
Text GLabel 5050 3250 0    60   Input ~ 0
ITF-A_gnd
Text GLabel 5050 3800 0    60   Input ~ 0
ITF-K_pulse_redpitaya
$EndSCHEMATC
