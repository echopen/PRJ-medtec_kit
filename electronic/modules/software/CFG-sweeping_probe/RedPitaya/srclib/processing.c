#include "../inc/processing.h"

#if(RAW == ON)
/* Calculate the Pixel */
char* calcul_pixel(int16_t* buffer, int buffer_size, int position, char* pixel_tab, int pixel_buffer_size) {
	int i = 0, j = 0;
	int16_t total;

	for(i = 0; i < pixel_buffer_size; i++) {
		total = 0;
		for(j = 0; j < PIXEL_SIZE; j++) {
			total += buffer[i * PIXEL_SIZE + j];
		}
		pixel_tab[i+1] = total*255/PIXEL_SIZE;
	}

	pixel_tab[0] = position;

	return(pixel_tab);
}
#else
/* Calculate the Pixel */
char* calcul_pixel(float* buffer, int buffer_size, int position, char* pixel_tab, int pixel_buffer_size) {
	int i = 0, j = 0;
	float total;

	for(i = 0; i < pixel_buffer_size; i++) {
		total = 0;
		for(j = 0; j < PIXEL_SIZE; j++) {
			total += buffer[i * PIXEL_SIZE + j];
		}
		pixel_tab[i+1] = total/(PIXEL_SIZE*128);
	}

	pixel_tab[0] = position;

	return(pixel_tab);
}
#endif

void init_processing() {
	process_stop = 0;
	pthread_cond_init(&new_data_to_process,NULL);
	pthread_mutex_init(&process_mutex,NULL);

	/* Launch the processor Thread */
	pthread_create(&processor_thread, NULL, process_server, NULL);
}

void end_processing() {
	process_stop = 1;
	pthread_join(processor_thread, NULL);
	pthread_cond_destroy(&new_data_to_process);
    	pthread_mutex_destroy(&process_mutex);
}

void *process_server (void *p_data) {
	while(!process_stop) {
		pthread_mutex_lock(&process_mutex);
		pthread_cond_wait(&new_data_to_process, &process_mutex);
		data.pixel_tab = calcul_pixel(data.buffer, data.buffer_size, data.position, data.pixel_tab, data.pixel_buffer_size);
		/* We should have a string like "ABBB...BBB */
		pthread_mutex_unlock(&process_mutex);
	}
	pthread_exit(NULL);
}
