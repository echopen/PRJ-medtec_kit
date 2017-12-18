In this document we will inventory the ADC that we can use in our prototype.

## Specifications

We want at least 6 points of measurement per cycle when digitalising the data. The highest frequency we use is 7.5 MHz so we want at least **45 Msps**.

If we refer to the ADC used classically in the ultrasonic probe, the precision of the ADC must **10 or 12 bits**.

We use AD8331 or AD8332 as TGC in our device, nowing that these devices have a differential output, so the ADC must have **diffrential input**. Moreover, these TGC are optimise for 10/12 bits precision adc.

## Benchmark

| Reference | Manufacturer | Sampling rate (Msps) | Precision (bits) | Casing | Price (€) | Power Consumption (mW) | Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AD9238 | Analog Device | 20/40/65 | 12 | LQFP64 | 29.38 (65 Msps) | 300 mW/channel (65 MSPS) | Propose in AD8331 datasheet p34, dual ADC |
| AD9215 | Analog Device | 65/80/105 | 10 | TSSOP-28 | 9.51 (65 Msps) | 90 mW (65 MSPS) | Proposed by [Analog Device](http://www.analog.com/en/products/amplifiers/variable-gain-amplifiers/analog-control-vgas/ad8331.html#product-designs) |
| AD9214 | Analog Device | 65/80/105 | 10 | SSOP-28 | 11.88 (65 Msps) |  | Proposed by [Analog Device](http://www.analog.com/en/products/amplifiers/variable-gain-amplifiers/analog-control-vgas/ad8331.html#product-designs) |
| AD9411 | Analog Device | 170/200 | 10 |  |  |  | Obsolete, proposed by [Analog Device](http://www.analog.com/en/products/amplifiers/variable-gain-amplifiers/analog-control-vgas/ad8331.html#product-designs) |
| AD9233 | Analog Device | 80/105/125 | 12 | LFCSP-48 | 27.29 (80 Msps) | 395 mW (125 MSPS) | ADC present on US-SPI board |
| AD9629 | Analog Device | 20/40/65/80 | 12 | LFCSP-32 | 26.95 (80 Msps) | 85 (80Msps) |  |
| AD9231 | Analog Device | 20/40/65/80 | 12 | LFCSP-64 | 38.06 (80 Msps) | 71 (80 Msps) | Bought at the beginning of echOpen |
| ADS4122 | Texas Instruments | 65 | 12 | VQFN-48 | 18.02 | 95 | 4125 for 125 Msps, 4126 for 160 Msps, 4128 for 200 Msps, 4142 for 14 bits 65 Msps |
| ADC12L080 | Texas Instrument | 80 | 12 | LQFP-32 | 23.04 | 425 |  |
| ADC10065 | Texas Instrument | 65 | 10 | TSSOP28 | 6.86 | 68.4 | ADC10040 for 40 Msps ADC10080 for 80 Msps |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |
