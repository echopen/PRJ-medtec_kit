#ifndef STEPPER_H
#define STEPPER_H

#include<unistd.h>

#define StepNumber 400 //number of step per tour of the stepper motor

typedef struct stepper_motor stepper_motor; //so we can call stepper_motor and not struct stepper_motor
/*---
enum mode is used for defining the steps of the stepper motor:
-full for full step
-full_2 for half step
-full_4 for 1/4 step
-full_8 for 1/8 step
-full_16 for 1/16 step
---*/
typedef enum mode mode;
/*---
enum sens is for the rotary sens of the stepper motor
---*/
typedef enum sens sens;

//functions to adapte depending on the hardware
void init_gpio(int pin, int value); //set gpio as input (value=0) or output (value=1)
void set_gpio(int pin, int value); //set value high (value=1) or low (value=0) to gpio pin
void wait(int time); //wait time in us

void init_stepper(stepper_motor* stepper); //initialyse the structure stepper_motor
void enable_stepper(stepper_motor* stepper);
void disable_stepper(stepper_motor* stepper);
void set_mode(stepper_motor* stepper, mode step_size); //set mode of the stepper : full, 1/2, 1/4, 1/8, 1/16 step
int half_step_time(stepper_motor* stepper, double* speed); //give time of a half step depending on the mode and speed in tour per second, note that this time is in microseconds and must be greater than 1 us. It change the speed to its real value
int step_number(stepper_motor* stepper, double* angle); //give the number of step to do in order to move to a given angle, if angle is not a multiple of the step angle, angle is change to its correct value
void move(stepper_motor* stepper, double* angle, double* speed, sens dir); //move the stepper of a given angle with a given speed on sens dir. It returns the real mooved angle and speed
void init_position(stepper_motor* stepper, double angle); //initialize the stepper position by going to the mecanic stop (sens2) and then move to the given angle (sens1)

enum mode
{
	full,full_2,full_4,full_8,full_16
};

enum sens
{
	sens1,sens2
};

struct stepper_motor
{
	int pin_en; //gpio for enabling or disabling stepper (via the stepper driver A4988, pin EN)
	int pin_ms1; //gpio for state of MS1 of A4988
	int pin_ms2; //gpio for state of MS2 of A4988
	int pin_ms3; //gpio for state of MS3 of A4988
	int pin_step; //gpio for pin STEP of A4988
	int pin_dir; //gpio for pin DIR of A4988
	mode step_size;
	int StepPerTour; //number of step per tour depending on the step size (full, 1/2, 1/4...)
	double minimum_angle; //angle made by one step size
};

void init_gpio(int pin, int value)
{
	rp_DpinSetDirection(pin, value);
}


void set_gpio(int pin, int value)
{
	rp_DpinSetState(pin,value);
}

void wait(int time)
{
	usleep((unsigned int)time);
}


void init_stepper(stepper_motor* stepper)
{
	stepper->pin_en=RP_DIO5_N;
	stepper->pin_ms1=RP_DIO4_N;
	stepper->pin_ms2=RP_DIO3_N;
	stepper->pin_ms3=RP_DIO2_N;
	stepper->pin_step=RP_DIO1_N;
	stepper->pin_dir=RP_DIO0_N;
	stepper->step_size=full;

	init_gpio(stepper->pin_en,1);
	init_gpio(stepper->pin_ms1,1);
	init_gpio(stepper->pin_ms2,1);
	init_gpio(stepper->pin_ms3,1);
	init_gpio(stepper->pin_step,1);
	init_gpio(stepper->pin_dir,1);


	set_gpio(stepper->pin_en,1);
	set_gpio(stepper->pin_ms1,0);
	set_gpio(stepper->pin_ms2,0);
	set_gpio(stepper->pin_ms3,0);
	set_gpio(stepper->pin_step,0);
	set_gpio(stepper->pin_dir,0);
}

void enable_stepper(stepper_motor* stepper)
{
	set_gpio(stepper->pin_en,0);
}

void disable_stepper(stepper_motor* stepper)
{
	set_gpio(stepper->pin_en,1);
}

void set_mode(stepper_motor* stepper, enum mode step_size)
{
	// mode of step from A4988 datasheet
	stepper->step_size=step_size;

	if (step_size==full)
	{
		set_gpio(stepper->pin_ms1,0);
		set_gpio(stepper->pin_ms2,0);
		set_gpio(stepper->pin_ms3,0);
		stepper->StepPerTour=StepNumber;
		stepper->minimum_angle=360.0/((double)stepper->StepPerTour);
	}
	if (step_size==full_2)
	{
		set_gpio(stepper->pin_ms1,1);
		set_gpio(stepper->pin_ms2,0);
		set_gpio(stepper->pin_ms3,0);
		stepper->StepPerTour=StepNumber*2;
		stepper->minimum_angle=360.0/((double)stepper->StepPerTour);
	}
	if (step_size==full_4)
	{
		set_gpio(stepper->pin_ms1,0);
		set_gpio(stepper->pin_ms2,1);
		set_gpio(stepper->pin_ms3,0);
		stepper->StepPerTour=StepNumber*4;
		stepper->minimum_angle=360.0/((double)stepper->StepPerTour);
	}
	if (step_size==full_8)
	{
		set_gpio(stepper->pin_ms1,1);
		set_gpio(stepper->pin_ms2,1);
		set_gpio(stepper->pin_ms3,0);
		stepper->StepPerTour=StepNumber*8;
		stepper->minimum_angle=360.0/((double)stepper->StepPerTour);
	}
	if (step_size==full_16)
	{
		set_gpio(stepper->pin_ms1,1);
		set_gpio(stepper->pin_ms2,1);
		set_gpio(stepper->pin_ms3,1);
		stepper->StepPerTour=StepNumber*16;
		stepper->minimum_angle=360.0/((double)stepper->StepPerTour);
	}
}

int half_step_time(stepper_motor* stepper, double* speed)
{
	double time;

	time=1000000.0/((double)stepper->StepPerTour)/(*speed)/2.0; //time in us (factor 1000000) of an half step (factor 2)
	if (time<1.0){time=1.0;} //minimum time is set 1.0 us from A4988 datasheet
	(*speed)=500000.0/((double)stepper->StepPerTour)/time; //from time=1000000/(Nstep*speed*2)
	return (int)time;
}

int step_number(stepper_motor* stepper, double* angle)
{
	int  Nstep;

	if ((*angle) < stepper->minimum_angle){(*angle)=stepper->minimum_angle;}	
	Nstep=(int)((*angle)/stepper->minimum_angle);
	(*angle)=(double)(Nstep)*stepper->minimum_angle;

	return Nstep;
}

void move(stepper_motor* stepper, double* angle, double* speed, sens dir)
{
	int Nstep, half_time;
	int i;

	set_gpio(stepper->pin_dir,dir);
	half_time=half_step_time(stepper, speed);
	Nstep=step_number(stepper, angle);

	for (i=0 ; i<Nstep ; i++)
	{
		set_gpio(stepper->pin_step,1);
		wait(half_time);
		set_gpio(stepper->pin_step,0);
		wait(half_time);
	}
}

void init_position(stepper_motor* stepper, double angle)
{
	double tour=360.0, speed=3.0;

	enable_stepper(stepper);
	wait(100);
	move(stepper, &tour, &speed, sens2);
	wait(100);
	move(stepper, &angle, &speed, sens1);

}

#endif
