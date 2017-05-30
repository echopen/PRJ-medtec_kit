#ifndef SIG_PROC_H
#define SIG_PROC_H


#include <stdio.h>
#include <math.h>
#include <complex.h>

/*-----------------------------------------
C scrit for calculating fft
source from https://rosettacode.org/wiki/Fast_Fourier_transform
-----------------------------------------*/
 
const double PI = 3.141592653589793238460;
typedef double complex cplx;
cplx *fft_table = NULL;
cplx *ifft_table = NULL;

void init_table(int length);
void rec_fft(cplx *buf, cplx *out, int n, int step);
void fft(cplx *buf, int n);//need a signal with length equal to a power of 2
void rec_ifft(cplx *buf, cplx *out, int n, int step);
void ifft(cplx *buf, int n);//need a signal with length equal to a power of 2
void filter(cplx *buf, int n , float fech , float f0 , float fm , int methode);
void hilberttransform(double *sig, cplx *ht, int n, float fech, float f0, float fm, int methode);
void hilberttransform_matrix(double **sig, cplx **ht, int line, int row, float fech, float f0, float fm, int methode);
void envelope(double *sig, double *envelope, int n, float fech, float f0, float fm, int methode);
void envelope_matrix(double **sig, double **envelope, int line, int row, float fech, float f0, float fm, int methode);
int int_pow(int x, int power);
int power_two(int x, int *pow);//determine the power of 2 superior and nearest to x return 0 if length(x) is a power of 2, 1 else
void zero_padding (double *sig, double *pad, int sig_length, int pad_length, int methode);//pad2 is equal to sig but is power of 2 long for fft, if methode==0 finish by 0 else finish by mean(sig)
void zero_padding_matrix (double **sig, double **pad, int line, int row, int pad_length, int methode);
void filter_image (double **image, double **filt_image,  int line, int row);
void load_image(double **image, int line, int row, char *name);
void write_image (double **image, int line, int row, char *name);

void init_table(int length)
{
	int j=0;
	fft_table=(cplx *)malloc(length*sizeof(cplx));
	ifft_table=(cplx *)malloc(length*sizeof(cplx));

	for (j=0 ; j<length ; j++)
	{
		fft_table[j]=cexp(-I*PI*j/length);
		ifft_table[j]=cexp(I*PI*j/length);
	}
}

void rec_fft(cplx *buf, cplx *out, int n, int step)
{
	cplx t;
        if (step < n) {
                rec_fft(out, buf, n, step * 2);
                rec_fft(out + step, buf + step, n, step * 2);

                for (int i = 0; i < n; i += 2 * step) {
                        t = fft_table[i] * out[i + step];
                        buf[i / 2]     = out[i] + t;
                        buf[(i + n)/2] = out[i] - t;
                }
        }
}

 
void fft(cplx *buf, int n)
{
	cplx out[n];
	for (int i = 0; i < n; i++) out[i] = buf[i];
 
	rec_fft(buf, out, n, 1);
}

void rec_ifft(cplx *buf, cplx *out, int n, int step)
{
	cplx t;
        if (step < n) {
                rec_ifft(out, buf, n, step * 2);
                rec_ifft(out + step, buf + step, n, step * 2);

                for (int i = 0; i < n; i += 2 * step) {
                        t = ifft_table[i] * out[i + step];
                        buf[i / 2]     = out[i] + t;
                        buf[(i + n)/2] = out[i] - t;
                }
        }
}

 
void ifft(cplx *buf, int n)
{
	cplx out[n];
	for (int i = 0; i < n; i++) out[i] = buf[i];
 
	rec_ifft(buf, out, n, 1);
	for (int i = 0 ; i < n ; i++){buf[i] /= n;}
}

void filter(cplx *buf, int n , float fech , float f0 , float fm , int methode)
{
	int n0 , n1 , N;
	n0=(int)(f0*n/fech);
	n1=(int)(fm*n/fech);
	N=n1-n0+1;
	//printf("%i %i %i\n", n0 , n1 , N);

	for (int i=0 ; i<n0 ; i++){buf[i]=(complex) 0;}
	for (int i=n1 ; i<n ; i++){buf[i]=(complex) 0;}

	switch(methode) {

		case 0 : //door
			break; // optional

		case 1 : //Hanning: 0.5*(1-cos(2*pi*t/T))
			for (int i=0 ; i<N ; i++){buf[i+n0]*=(complex)(0.5*(1.0-cos(2.0*PI*i/N)));}
			break;

		case 2 : //Blackmann: 0.42-0.5*cos(2*pi*t/T)+0.08*cos(4*pi*t/T)
			for (int i=0 ; i<N ; i++){buf[i+n0]*=(complex)(0.42-0.5*cos(2.0*PI*i/N)+0.08*cos(4.0*PI*i/N));}
			break; 

	}
}

void hilberttransform(double *sig, cplx *ht, int n, float fech, float f0, float fm, int methode) 
{
	for (int i=0 ; i<n ; i++) {ht[i] = (complex) sig[i];}
	fft(ht,n);
	filter(ht, n , fech , f0 , fm , methode);
	ifft(ht,n);
}

void hilberttransform_matrix(double **sig, cplx **ht, int line, int row, float fech, float f0, float fm, int methode) 
{
	cplx temp[line];
	int i=0, j=0;

	for (i=0 ; i<row ; i++)
	{
		for (j=0 ; j<line ; j++) {temp[j] = (complex)sig[j][i];}
		fft(temp,line);
		filter(temp, line, fech, f0, fm, methode);
		ifft(temp,line);
		for (j=0 ; j<line ; j++) {ht[j][i] = temp[j];}
	}
}

void envelope(double *sig, double *envelope, int n, float fech, float f0, float fm, int methode)
{
	int i=0;
	cplx ht[n];
	hilberttransform(sig, ht, n, fech, f0, fm, methode);
	for (i=0 ; i<n ; i++){envelope[i]=cabs(ht[i])*2.0;}
}

void envelope_matrix(double **sig, double **envelope, int line, int row, float fech, float f0, float fm, int methode)
{
	int i=0, j=0;
	cplx **ht=NULL;
	ht=(cplx **)malloc(line*sizeof(cplx *));
	for (i=0 ; i<line ; i++) {ht[i]=(cplx *)malloc(row*sizeof(cplx));}

	hilberttransform_matrix(sig, ht, line, row, fech, f0, fm, methode);

	for (i=0 ; i<line ; i++)
	{
		for (j=0 ; j<row ; j++) {envelope[i][j]=cabs(ht[i][j]*2.0);}
	}
}

int int_pow(int x, int power)
{
	int y=1;
	int i=1;
	for (i=1 ; i<=power ; i++){y*=x;}
	return y;
}

int power_two(int x, int *pow)
{
	if (x<1) {return 2;}
	else if (x==1) 
	{
		(*pow)=0;
		return 0;
	}
	else
	{
		int ret=1;
		(*pow)=0;
		double y=(double)x;
		while (y>=2.0)
		{
			(*pow)++;
			//printf("y = %f\n",y);
			if (y==2.0) {ret=0;}
			y/=2.0;
		}
		return ret;
	}
}

void zero_padding (double *sig, double *pad, int sig_length, int pad_length, int methode)
{
	int i=0;
	double mean=0.0;
	for (i=0 ; i<sig_length ; i++) 
	{
		mean+=(double)sig[i];
		pad[i]=(double)sig[i];
	}
	mean/=((double)sig_length);

	for (i=sig_length ; i<pad_length ; i++) 
	{
		if (methode==0)
		{
			pad[i]=0.0;
		}
		else
		{
			pad[i]=mean;
		}
	}
}

void zero_padding_matrix (double **sig, double **pad, int line, int row, int pad_length, int methode)
{
	int i=0, j=0;
	double mean=0.0;

	for (i=0 ; i<row ; i++)
	{
		mean=0.0;
		for (j=0 ; j<line ; j++)
		{
			mean+=sig[i][j];
			pad[j][i]=sig[j][i];
		}
		mean/=((double)line);
		for (j=line ; j<pad_length ; j++)
		{
			if (methode==0) {pad[j][i]=0.0;}
			else {pad[j][i]=mean;}
		}
	}
}

void filter_image (double **image, double **filt_image,  int line, int row)
{
	int i=0, j=0, k=0, l=0;
	int kmin=0, kmax=0, lmin=0, lmax=0;
	double li=0, ro=0;
	
	for (i=0 ; i<line ; i++)
	{
		kmin=i-1;
		kmax=i+1;
		li=3.0;
		if (i==0)
		{
			kmin=0;
			li--;
		}
		if (i==line-1) //not else if for vector not matrix
		{
			kmax=i;
			li--;
		}
		for (j=0 ; j<row ; j++)
		{
			lmin=j-1;
			lmax=j+1;
			ro=3.0;
			if (j==0)
			{
				lmin=0;
				ro--;
			}
			if(j==row-1)
			{
				lmax=j;
				ro--;
			}

			filt_image[i][j]=0.0;
			for (k=kmin ; k<=kmax ; k++)
			{
				for (l=lmin ; l<=lmax ; l++)
				{
					filt_image[i][j]+=image[k][l];
				}
			}
			filt_image[i][j]/=(li*ro);
		}
	}
}

void load_image(double **image, int line, int row, char *name)
{
	FILE *h=NULL;
	int tmp=0;

	h=fopen(name,"r");
	if (h==NULL)
	{
		printf("file not found\n");
	}
	else
	{
		int i=0, j=0;
		for (i=0 ; i<row ; i++)
		{
			for (j=0 ; j<line ; j++)
			{
				fscanf(h, "%i", &tmp);
				image[j][i]=(double)tmp;
			}
		}	
		fclose(h);
	}
}

void write_image (double **image, int line, int row, char *name)
{
	FILE *f;
	f=fopen(name, "w+");
	if (f==NULL) {printf("failed to crate file\n");}

	int i=0, j=0;
	for (i=0 ; i<row ; i++)
	{
		for (j=0 ; j<line ; j++)
		{
			fprintf(f,"%f ",image[j][i]);
		}
		fprintf(f,"\n");
	}
}

void gray_log (double **image, double **image2, int line, int row)
{
	int i=0, j=0;
	for (i=0 ; i<line ; i++)
	{
		for (j=0 ; j<row ; j++) {image2[i][j]=log(image[i][j]);}
	}
}

#endif

