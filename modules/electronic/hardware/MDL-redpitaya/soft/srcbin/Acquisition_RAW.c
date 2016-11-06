#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

#include "rp.h"
#include "../inc/tcp.h"

/*------------------------------------
This version give the good line number
------------------------------------*/

void init_ramp() {
	rp_GenWaveform(RP_CH_2, RP_WAVEFORM_RAMP_UP);
	rp_GenMode(RP_CH_2, RP_GEN_MODE_BURST);
	rp_GenBurstCount(RP_CH_2, 1);
	rp_GenAmp(RP_CH_2, 1.0);
	rp_GenFreq(RP_CH_2, 7633.59);	
	rp_GenTriggerSource(RP_CH_2,RP_TRIG_SRC_CHA_NE);
	rp_GenOutEnable(RP_CH_2);
}

void end_ramp() {rp_GenOutDisable(RP_CH_2);}

void init_acq() {
	rp_AcqSetDecimation(RP_DEC_8);
	rp_AcqSetAveraging(1);
	rp_AcqSetGain(RP_CH_2,RP_HIGH); 	
}

void end_acq() {rp_Release();};

void init(int tcp_size){
	if(rp_Init() != RP_OK){
		fprintf(stderr, "Rp api init failed!\n");
	}
	init_ramp();
	init_acq();
	init_tcp(tcp_size);
}

void end() {
	end_ramp();
	end_acq();
	end_tcp();
}

void trigg() {
	rp_AcqStart();
	rp_AcqSetTriggerSrc(RP_TRIG_SRC_EXT_NE);
	rp_AcqSetTriggerDelay(-6144); //if there is noise at the end can use -6550
	rp_acq_trig_state_t state = RP_TRIG_STATE_TRIGGERED;
	while(1){
		rp_AcqGetTriggerState(&state);
		if(state == RP_TRIG_STATE_TRIGGERED){
			break;
		}
	}
}

void writefile (float *data,uint32_t length) {
	FILE * fm;
 	fm = fopen ("moy.txt", "w+");
	for (int i=0 ; i<length ; i++) {fprintf(fm, "%f\n", data[i]);}
	fclose(fm);
}
void writefile2 (char *data,uint32_t length) {
	FILE * fm;
 	fm = fopen ("moy.txt", "w+");
	for (int i=0 ; i<length ; i++) {fprintf(fm, "%i\n", (int)data[i]);}
	fclose(fm);
}

void sendviatcp (char *tcpline, uint32_t buffer_size, float *buffer, int line_number) {
	int i=0;
	float tmp, scale=1.5; //pend on maximum value of input, for test scale=1
	tcpline[0]=line_number;
	for (i=0 ; i<buffer_size ; i++) {
		tmp=255.0/scale*buffer[i]-25;
		tmp=(int)tmp;
		if (tmp<0) {tmp=-tmp;}
		if (tmp==0) {tmp=1;}
		if (tmp>255) {tmp=255;}
		tcpline[i+1]=(char)tmp;
	}
	//writefile2(tcpline,buffer_size+1);
	pthread_mutex_lock(&mutex);
	memcpy(data_to_send, tcpline, buffer_size+1);
	pthread_cond_signal(&new_data);
	pthread_mutex_unlock(&mutex);		
}


// Define the function to be called when ctrl-c (SIGINT) signal is sent to process
void signal_callback_handler(){
	printf("Close TCP\n");
	end();
	exit(0);
}

int main(int argc, char **argv){
	int line, image;//, i;
	int Nline = 64, Nimage=1000;
	uint32_t buff_size = 1024;
	uint32_t tcp_size = buff_size+1;
	float *buff = (float *)malloc(buff_size * sizeof(float));
	char *tcp_buff = (char *)malloc(tcp_size * sizeof(char));

	signal(SIGINT, signal_callback_handler);

	init(tcp_size);
	for (image=0 ; image<Nimage ; image++) {

		for (line=33 ; line<=Nline ; line++) {
			trigg();
			rp_AcqGetLatestDataV(RP_CH_2, &buff_size, buff);
			sendviatcp(tcp_buff,buff_size,buff,line);
		}
		for (line=32 ; line>0 ; line--) {
			trigg();
			rp_AcqGetLatestDataV(RP_CH_2, &buff_size, buff);
			sendviatcp(tcp_buff,buff_size,buff,line);
		}
		printf("Image numéro %i\n",image);
	}

	//writefile(buff,buff_size);
	printf("Done\n");  //min time 2.3 ms between each acquisition with 4096 points
	end();             //min with 1.2 ms with 2048 points
	free(buff);
	free(tcp_buff);

	return 0;
}
