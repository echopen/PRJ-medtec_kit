#include<stdio.h> //for printf
#include<stdlib.h> //for exit()

#include"gnuplot_i.h"
#include"TCP_API.h"
#include"signal_processing.h"

#define Port 7538
#define fmin 1000000 //low frequency of pass_band filter
#define fmax 6000000 //high frequency of pass_band filter
//#define Ymax 1 //maximum boundary of the y axis

float r0=0.0;
float rf=0.0;
int dec=0;
int Nline=0;
double sector=0.0;
int mode_RP=0;
int step=1;


void writefile (double *z, int line, char *name)
{
	int i;
	FILE * f;
	f = fopen(name,"w+");
	for (i=0 ; i<line ; i++)
	{
		fprintf(f, "%f\n", z[i]);
	}
	fclose(f);
}

int main(int arg, char *argv[])
{
	int Npoint;

	//socket variable
	SOCKET sock;
	const char *IP="192.168.128.3";
	init_TCP_client(&sock, IP, Port);
	get_RP_settings(&sock);
	printf("r0=%f\n",r0);
        printf("rf=%f\n",rf);
        printf("dec=%i\n",dec);
        printf("Nline=%i\n",Nline);
        printf("sector=%f\n",sector);
	printf("mode_RP=%i\n",mode_RP);

	int l=0;

	Npoint=(int)(2.0*(rf-r0)*125.0/1.48/((double)dec));
        if (Npoint>16384) {Npoint=16384;}
	printf("Npoint = %i\n",Npoint);

	int powd, pad_len;
        if (power_two(Npoint,&powd)){powd++;}
        pad_len=int_pow(2,powd);
	init_table(pad_len);
	float fech=125000000.0/((float)dec);

	//gnuplot variable
	gnuplot_ctrl * h;
	double *y= (double *)malloc(Npoint*sizeof(double));
	int i;

	int Ymax=1.5;

	//gnuplot object
	h=gnuplot_init();
	gnuplot_setstyle(h,"lines");
	gnuplot_set_xlabel(h,"time (us)");
	gnuplot_set_ylabel(h,"signal");
	//gnuplot_cmd(h,"set yrange [0:%d]", 2*Ymax);
	gnuplot_cmd(h,"set xrange [0:%d]",Npoint-1);

	char name[30];

	if (mode_RP==0)
	{

		int powd, pad_len;
		if (power_two(Npoint,&powd)){powd++;}
        	pad_len=int_pow(2,powd);
		double *pad=NULL;
		pad=(double *)malloc(pad_len*sizeof(double));
		double *env=NULL;
		env=(double *)malloc(pad_len*sizeof(double));
	
		gnuplot_cmd(h,"set yrange [-0.01:1.5]");
		gnuplot_cmd(h,"set xrange [0:%d]",Npoint-1);
		int16_t *buff=(int16_t *)malloc((Npoint+1)*sizeof(int16_t));
		while(1)
		{
			if(receive_int16_TCP_client(&sock, buff, Npoint+1)==1){break;}
			for (i=1 ; i<Npoint+1 ; i++){y[i-1]=(double)(buff[i])/409.6;} //divide by 409.6 to have voltage value
			zero_padding(y, pad, Npoint, pad_len, 1);
			envelope(pad, env, pad_len, fech, fmin, fmax, 0);
			gnuplot_resetplot(h);
			//gnuplot_plot_x(h, y, Npoint, "Oscillo int16_t");
			gnuplot_plot_x(h, env, pad_len, "Oscillo int16_t");			
                        //sprintf(name, "int%i.txt", l);
                        //writefile(y, Npoint, name);
                        l++;

		}
		free(buff);
		free(pad);
		free(env);
	}

	else if (mode_RP==1)
	{
		char *buff=(char *)malloc((Npoint+1)*sizeof(char));
		while(1)
		{
			if(receive_TCP_client(&sock, buff, Npoint+1)==1){break;}
			for (i=1 ; i<Npoint+1 ; i++){y[i-1]=(double)(int_converter(buff[i]));} 
			gnuplot_resetplot(h);
			gnuplot_plot_x(h, y, Npoint, "Oscillo 256 gray");
			sprintf(name, "char%i.txt", l);
			//writefile(y, Npoint, name);
			l++;
		}
		free(buff);
	}

	else {printf("Problem of settings\n");}

	usleep(30);
	close(sock);
	free(y);

	return 0;
}
