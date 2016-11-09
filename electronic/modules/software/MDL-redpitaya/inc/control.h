#ifndef CONTROL_H
#define CONTROL_H

#include "common.h"

/* Define the Pin for signals and acquisitions and the size of the buffer */
#define PULSE_PIN RP_DIO1_P
#define ACQUISITION_PIN RP_CH_1
#define RAMP_PIN RP_CH_2

/* Mandatory variable which represent the trigger state */
rp_acq_trig_state_t state;

/* The function initializing the control functions, setting everything up */
void init_control(int decimation);

/* The function ending the control functions, setting everything down */
void end_control();

/* The function reseting the control functions, setting everything to zero */
void reset();

/* The function configuring the ramp used for controlling the TGC */
void configure_ramp();

/* The function configuring the pulse used for controlling the Pulse */
void configure_pulse();

/* The function configuring the ADC used for acquiring the datas */
void configure_ADC(int decimation);

/* The function sending a pulse */
void pulse(rp_dpin_t pin);

/* The function sending a ramp */
void ramp(rp_channel_t channel);

#if(RAW == ON)
/* The function acquiring datas through ADC */
int16_t* acquireADC(uint32_t buff_size, int16_t* temp);
#else
/* The function acquiring datas through ADC */
float* acquireADC(uint32_t buff_size, float* temp);
#endif

#endif
