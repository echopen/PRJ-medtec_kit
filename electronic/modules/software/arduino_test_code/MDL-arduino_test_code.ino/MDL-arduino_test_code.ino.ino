#define NOP __asm__ __volatile__ ("nop\n\t");

void pulse()
{
  PORTD=B01010000;
  NOP;
  PORTD=B00000000;
}

void setup() {
  // put your setup code here, to run once:
  DDRD = B01010000; 
}

void loop() {
  // put your main code here, to run repeatedly:
  pulse();
  delayMicroseconds(500);
}
