name of PCB on the back of the PCB

type of component + footprint
-resistor
-diode (line for cathode)
-condensator electrolitic (white mark for grd (minimum potential))
-tantalium condensator are polarise, line for maximum potential
-condensator ceramic
-transistor (strip draw on PCB)
-MOSFET back draw on PCB
-IC indication of top left (LM555 OPA625...)
-test point (not mandatory)

can solder only the back of the PCB

difficulties to retire solder

connection between two PCB SMA or 02x01 header (choose)

assembly advise chronology:
1) cut an experimenation in half (2 times 19 tracks). Solder 01x19 socket on it (not all, one by one with the daughter boards) first one for power suplly (18V from laboratory supply) and one for the first PCB.
put a reminder of the 19 tracks
2) solder DB-supply_v1, check with oscillo or multimeter for +12V on, -12V on, +5V on, -5V on, 3.3V on (rechercher le numéro des piste correspondant)
led D2 must light on
3) solder DB-motor_control (mettre quelquepart un code arduino qui pulse simplement pour verifer le pulse d'excitation et pulse RP de synchro)
touchy la liaison avec la RedPitaya.
4) solder DB-high_voltage check with oscilloscope (need attenuative /10 probe) or multimeter
5) solder DB-pulser with oscillo trigger on ITF9 with other probe measure pulse output (PX or PY...) don't forget to link DB-high_voltage output (PX or PY) to high voltage input of DB-pulser (PX or PY for sma)
add foto of MAX4940 evaluation kit (for the given version)
6) solder DB-TRswitch except jumper. Link 5) to 6) (sma cable preferably, pX to pY), now put second probe of oscillo on test point 1 (W1) ->oscillo screenshot. If ok, solder jumper (foto?). 
7) now one can plug a transducer to DB-pulse (pX), put it in a mug full of water, changing oscillo setting (around 10us, 100mV) and facing transducer to a "wall" of the mug one can see echoes!!! ouh yeah
8) now one can link AD8331 eval-kit.
9) solder DB-filter, DB-envelop_detection and dB-interface
10) new code in arduino
11) pulg IN1 of RP to px of db-interface, IN2 to py and OUT1 to ad8331 (foto) or pz of db-interface if db-trs_tgc_v2 and RP to motor_control
12) send code in the redpitaya and enjoy
