#include "../inc/control.h"

/* Initialize everything (The RP and all the configurations) */
void init_control(int decimation){
	/* Configuration */
	configure_pulse();
	configure_ramp();
	configure_ADC(decimation);
}

/* End everything (Stop Acquisition, motor and RP resources) */
void end_control() {
	rp_DpinSetState(PULSE_PIN, RP_LOW);
	rp_AcqStop();
}

/* Reset everyhting to down/low state */
void reset() {
	rp_DpinReset();
	rp_ApinReset();
	rp_GenReset();
	rp_AcqReset();
}

/* Configure the RAMP_PIN for generating a ramp with a 10 kHz frequency */
void configure_ramp() {
	rp_GenWaveform(RAMP_PIN, RP_WAVEFORM_RAMP_UP);
	rp_GenMode(RAMP_PIN, RP_GEN_MODE_BURST);
	rp_GenBurstCount(RAMP_PIN, 1);
	rp_GenAmp(RAMP_PIN, 1.0);
	rp_GenFreq(RAMP_PIN, 3846.15);
}

/* Configure the PULSE_PIN as an output */
void configure_pulse() {
	rp_DpinSetDirection(PULSE_PIN, RP_OUT);
}

/* Configure the ADC at 125MHz with an external trigger */
void configure_ADC(int decimation) {
	/* decimation n (=1,8,64...)*/
	switch(decimation) {
		case 1:
			rp_AcqSetDecimation(RP_DEC_1);
			break;
		case 2:
			rp_AcqSetDecimation(RP_DEC_8);
			break;
		case 3:
			rp_AcqSetDecimation(RP_DEC_64);
			break;
		case 4:
			rp_AcqSetDecimation(RP_DEC_1024);
			break;
		case 5:
			rp_AcqSetDecimation(RP_DEC_8192);
			break;
		default:
			exit(-1);
			break;
	}
	/* Enable the averaging on the ADC */
	rp_AcqSetAveraging(TRUE);

	/*acquisition trigger delay and level activation*/
	rp_AcqSetTriggerLevel(0.01); //Trig level is set in Volts while in SCPI
        rp_AcqSetTriggerDelay(0);

	/*start acquisition must be set before trigger initiation*/
	rp_AcqStart();

	/*trigger source, external, positif*/
#if(EXTERNAL_TRIGGER)
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_EXT_PE);
#else
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_CHA_PE);
#endif
	state = RP_TRIG_STATE_WAITING;
}

/* Generate a pulse */
void pulse(rp_dpin_t pin) {
	rp_DpinSetState(pin, RP_HIGH);
	rp_DpinSetState(pin, RP_LOW);
}

/* Generate a ramp */
void ramp(rp_channel_t channel) {
	rp_GenOutEnable(channel);
}

#if(RAW == ON)
/* Acquire one ray with the ADC */
int16_t* acquireADC(uint32_t buff_size, int16_t* temp) {
	/*trigger source, external, positif*/
#if(EXTERNAL_TRIGGER)
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_EXT_PE);
#else
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_CHA_PE);
#endif
	state = RP_TRIG_STATE_WAITING;

	/*waiting for trigger*/
	while(1){
		rp_AcqGetTriggerState(&state);
		if(state == RP_TRIG_STATE_TRIGGERED){
			break;
		}
	}

	ramp(RAMP_PIN);
	/*put acquisition data in the temporary buffer*/
	rp_AcqGetOldestDataRaw(ACQUISITION_PIN, &buff_size, temp);

	return(temp);
}
#else
/* Acquire one ray with the ADC */
float* acquireADC(uint32_t buff_size, float* temp) {
	/*trigger source, external, positif*/
#if(EXTERNAL_TRIGGER)
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_EXT_PE);
#else
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_CHA_PE);
#endif
	state = RP_TRIG_STATE_WAITING;

	/*waiting for trigger*/
	while(1){
		rp_AcqGetTriggerState(&state);
		if(state == RP_TRIG_STATE_TRIGGERED){
			break;
		}
	}

	ramp(RAMP_PIN);
	/*put acquisition data in the temporary buffer*/
	rp_AcqGetOldestDataV(ACQUISITION_PIN, &buff_size, temp);

	return(temp);
}
#endif
