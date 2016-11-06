#ifndef IMPLEMENTER_H
#define IMPLEMENTER_H

#include "common.h"
#include "control.h"
#include "tcp.h"
#include "processing.h"

/* The function setting everything up, calling all the init_X functions */
void init(int decimation, int pixel_buffer_size);

/* The function setting everything down, calling all the end_X functions */
void end();

#if(RAW == ON)
/* The main routine, sending a pulse, waiting 66us, sending a ramp, acquiring datas through ADC, then calculating the pixels and sending them to the TCP Thread */
void routine(int16_t* buffer, int buffer_size, char* pixel_buffer, int pixel_buffer_size);
#else
/* The main routine, sending a pulse, waiting 66us, sending a ramp, acquiring datas through ADC, then calculating the pixels and sending them to the TCP Thread */
void routine(float* buffer, int buffer_size, char* pixel_buffer, int pixel_buffer_size);
#endif

#endif
