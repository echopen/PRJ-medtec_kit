#include "../inc/tcp.h"

/* Initialize everything (The RP and all the configurations) */
void init_tcp(int buffer_size){
	stop = 0;
	pthread_cond_init(&new_data,NULL);
	pthread_mutex_init(&mutex,NULL);

	if((data_to_send = malloc(buffer_size * sizeof(char))) == NULL)
		exit(-1);

	/* Launch the UDP protocol */
	pthread_create(&tcp_server_thread, NULL, tcp_server, NULL);
}

/* End everything (Stop Acquisition, motor and RP resources) */
void end_tcp() {
	stop = 1;
	pthread_cancel(tcp_server_thread);
	pthread_cond_destroy(&new_data);
    	pthread_mutex_destroy(&mutex);
	free(data_to_send);
}

/* Initialize the Server */
int init_connection(void) {
	/* TCP Socket */
	SOCKET sock = socket(AF_INET, SOCK_STREAM, 0);
	SOCKADDR_IN sin = { 0 };

	if(sock == INVALID_SOCKET) {
		perror("socket()");
		exit(errno);
	}

	sin.sin_family = AF_INET;
	sin.sin_addr.s_addr = INADDR_ANY;
	sin.sin_port = htons(PORT);

	if(bind(sock,(SOCKADDR *) &sin, sizeof sin) == SOCKET_ERROR) {
		perror("bind()");
		exit(errno);
	}

	listen(sock, MAX_CLIENTS);

	return sock;
}

/* End the Server */
void end_connection(int sock) {
	close(sock);
}

/* Control the TCP Server */
void *tcp_server (void *p_data) {
	/* Render this Thread autonomous */
	SOCKET client_sock;
	SOCKADDR_IN client_addr;
	socklen_t client_length;
	int sending_flag;
//	pid_t pid;

	fprintf(stdout, "Server launched, waiting for connection...\n");
	fflush(stdout);

	SOCKET sock = init_connection();
	client_length = sizeof(client_addr);

	while(!stop) {
		sending_flag = 0;
		client_sock = accept(sock, (SOCKADDR *)&client_addr, &client_length);
		if(client_sock == SOCKET_ERROR) {
			perror("accept()");
			exit(errno);
		}

		fprintf(stdout, "New Client is connected\n");
		fflush(stdout);

/*		pid=fork();
		if(!pid) {
			*/while(!stop && !sending_flag){
				pthread_mutex_lock(&mutex);
				pthread_cond_wait(&new_data, &mutex);

				sending_flag = send_data(data_to_send, client_sock);
//				fprintf(stdout, "Data sent\n");
				pthread_mutex_unlock(&mutex);
			}
/*			fprintf(stdout, "Child closed its socket\n");
			fflush(stdout);
			close(client_sock);
			exit(0);
		}
*/
		fprintf(stdout, "Client is disconnected\n");
		fflush(stdout);
		close(client_sock);
	}

	fprintf(stdout, "Server is now down\n");
	fflush(stdout);
	end_connection(sock);

	pthread_exit(NULL);
}

/* Send the datas through the TCP Server */
int send_data(char* data_to_send, SOCKET client_sock) {
	int n;
	
	n = write(client_sock, data_to_send, strlen(data_to_send));
	if (n < 0)
		return(-1);
	return(0);
}
