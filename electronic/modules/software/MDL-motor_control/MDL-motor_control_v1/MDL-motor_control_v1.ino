#define NOP __asm__ __volatile__ ("nop\n\t")

//volatile for interrupt
volatile float MotorVelocity=3.0;
volatile unsigned long t10=0, t11=0;
volatile double Deltat;
volatile int PinDecodeur=2; //conteur pour se caler sur le même capteur
double Cv=0.052*6.283185307;

int pwm=200;  //motor pwm
int stateold=LOW, statenew=LOW; //state of motor encoder
int tourold=LOW, tournew=LOW; //state of mecaniq encoder
int pinpwm=5; //Pin for motor pwm
int pinA=2; //Pin for moteur encoder
int PinTour=7; //Pin for half tour encoder
int PinLED=9; //Pin for pulse
double Vlim=2.0/1000000.0*6.283185307;//2.8

// position variables
const int N=64; //number of line
volatile double phi[N-1]; //angle of the motor
volatile double dphi[N];  //delta phi between lines
int pos=0;  //number of the line
unsigned int dt; //delta t between lines

void Pulse(){
  PORTB = B00010010;
  NOP;
  PORTB = B00000000;//pulse 125 ns long
}

void Velocity(){
  PinDecodeur++;
  if (PinDecodeur==1){
    /* there is 3 detector per tour in the encoder not equaly space
     * so we take only one to be sure un tour is done
     */
    t11=micros();
    Deltat=(double)(t11-t10);
    MotorVelocity=Cv/Deltat; //velocity in radian per us
    t10=t11;
    if(MotorVelocity>Vlim) {
      pwm--;
      MotorVelocity=Vlim;
      }
    else{pwm++;}
    analogWrite(pinpwm,pwm);
  }
  if (PinDecodeur==3){PinDecodeur=0;}
}

void Interpolation(){
  for (int i=0 ; i<N ;i++){
    phi[i]=asin(2.0*i/(N-1.0)-1.0);
  }
  dphi[0]=phi[N/2];
  for (int i=1 ; i<N/2 ; i++){dphi[i]=phi[N/2+i]-phi[N/2+i-1];}
  for (int i=N/2 ; i<N-1 ; i++){dphi[i]=dphi[N-1-i];}
  for (int i=0 ; i<N-1 ; i++){
  }
  /*for (int i=0 ; i<N-1 ; i++){
    Serial.print(dphi[i]);
    Serial.print("\n");
  }*/
}

void setup() {
  // put your setup code here, to run once:
  pinMode(pinpwm,OUTPUT);
  DDRB = B00010010;//pinMode(PinLED,OUTPUT);
  pinMode(PinTour,INPUT);
  pinMode(pinA,INPUT);
  Serial.begin(115200);
  analogWrite(pinpwm,pwm);
  Interpolation();
  attachInterrupt(digitalPinToInterrupt(2), Velocity, RISING);
}

void loop() {
  // put your main code here, to run repeatedly:
  pos=0;

  tournew=digitalRead(PinTour);
  if(tournew==HIGH && tourold==LOW){
        while (pos<N/2){
      dt=(unsigned int)(dphi[pos]/MotorVelocity);
      if (dt>20000){
        // empiricaly it is more precise to do like that...
        delayMicroseconds(10000);
        delayMicroseconds(10000);
        delayMicroseconds(dt-20001);
      }
      else if(dt>10000){
        delayMicroseconds(10000);
        delayMicroseconds(dt-10001);
      }
      else{delayMicroseconds(dt-1);}
      Pulse();
      pos++;
    }
}
  if(tournew==LOW && tourold==HIGH){
        while (pos<N/2){
      dt=(unsigned int)(dphi[pos]/MotorVelocity);
      if (dt>20000){
        delayMicroseconds(10000);
        delayMicroseconds(10000);
        delayMicroseconds(dt-20001);
      }
      else if(dt>10000){
        delayMicroseconds(10000);
        delayMicroseconds(dt-10001);
      }
      else{delayMicroseconds(dt-1);}
      Pulse();
      pos++;
    }
  }
  tourold=tournew;
}
