#ifndef TCP_H
#define TCP_H

#include <string.h>
#include <errno.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>

#include "common.h"

#define PORT 7538   //The port on which to listen for incoming data
#define MAX_CLIENTS 1
#define INVALID_SOCKET -1
#define SOCKET_ERROR -1

typedef struct sockaddr_in SOCKADDR_IN;
typedef struct sockaddr SOCKADDR;
typedef int SOCKET;

pthread_t tcp_server_thread;
pthread_cond_t new_data;
pthread_mutex_t mutex;
char *data_to_send;
int stop;

/* The function setting TCP up */
void init_tcp(int pixel_buffer_size);

/* The function setting TCP down */
void end_tcp();

/* The function initializing the server */
int init_connection(void);

/* The function ending the server */
void end_connection(int sock);

/* The Thread controlling the TCP Server */
void *tcp_server (void *p_data);

/* The function sending the datas through the TCP Server */
int send_data(char* data_to_send, SOCKET client_sock);

#endif
