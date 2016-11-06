#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#include "rp.h"

int main(int argc, char **argv)
{
	int i=0;
	//rp_pinState_t state;

	// Initialization of API
	if (rp_Init() != RP_OK) {
		fprintf(stderr, "Red Pitaya API init failed!\n");
		return EXIT_FAILURE;
	}

	rp_DpinReset();
	
	//int trig=7;
	printf("RP_DIO7_N=%i\n",RP_DIO7_N);

	for (i=0 ; i<1000 ; i++){
		rp_DpinSetState(23,RP_HIGH);
		rp_DpinSetState(RP_DIO7_N,RP_LOW);
		usleep(1000000);
	}

	// Releasing resources
	rp_Release();

	return EXIT_SUCCESS;
}
