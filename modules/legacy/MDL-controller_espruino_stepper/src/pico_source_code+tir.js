var t0=getTime();            // Loading time

// Pololu DRV8825 constants
STP_TR = 200*4;  // 1/4 step M0:float, M1:low
nEN    = B15;
DIR    = A5;
STP    = A6;
M0     = B14;
M1     = B13;
PULSE_PIN = LED1; //B0;

ANGLE  = 60;        // scanning angle 60°
FPS    = 1;         // frame per second
PPF    = 5;        // lines per frame
PULSE  = 1/3500/2   * 7;  // pulse duration (1000/3.5MHz / 2 ms)
MARGIN = 10;        // margin °
NB_FREQ= 3;         // transducers number

ORG       = STP_TR/360*MARGIN;
POS_OFS   = [ORG, ORG+STP_TR/NB_FREQ, ORG+2*STP_TR/NB_FREQ]; // 3 
STP_ACC   = 0;                // [3] nb acceleration steps 
STP_CST   = Math.round(STP_TR/360*ANGLE); // [140] nb vmax steps
STP_VMIN  = 4;                // [4] vmin steps period ms
STP_VMAX  = 1000/FPS/STP_CST; // [0.381] vmax steps period ms
STP_PULSE = 0.15;             // [0.15] high level duration ms

// global vars
var inpBtn=0;
var inpTarget=0;
var absPos=0;
var curr_state;
var stpIntId;
var btnIntId;
var target;
//var steps=new Float32Array(2*(STP_ACC+STP_CST+STP_ACC));
var pulses=new Float32Array(2*PPF);

// motion profile
//for (s=0; s < 2*(STP_ACC+STP_CST+STP_ACC); s++)
//{ if (s < STP_ACC) { dt=2.0/(1.0-Math.cos((s+1)/STP_ACC*Math.PI))*STP_VMAX; }
//  else if (s < STP_ACC+STP_CST) { dt=STP_VMAX; }
//  else if (STP_ACC+STP_CST+STP_ACC) { dt=2.0/(1.0-Math.cos((2*STP_ACC+STP_CST-s)/STP_ACC*Math.PI))*STP_VMAX; }
//  steps[s*2]=STP_PULSE;
//  steps[s*2+1]=dt-STP_PULSE;
//}
for (p=0;p < PPF; p++)
{  pulses[p*2]=PULSE;
   pulses[p*2+1]=1/FPS/PPF*1000 - PULSE;
}

// move n steps @ p ms
function doStep()
   { digitalPulse(STP, 1, p2);
     inpTarget--;
     if (inpTarget<=0)
       { clearInterval(stpIntId);
         digitalWrite(LED2, 1);
       }
   }

function move(n, p)
{ if (inpTarget > 0) return;
  d = n > 0 ? 1 : 0;
  inpTarget = Math.abs(n);
  absPos +=n;
  p2 = p/2;
  digitalWrite(DIR, d);
  stpIntId=setInterval(doStep, p);
}

function scan(n)
{ n2 = n > 0 ? STP_CST : -STP_CST;
  move(n2, STP_VMAX);
  digitalPulse(LED1, 1, pulses);
}

function xxxscan(n)
{ d = n > 0 ? 1 : 0;
  digitalWrite(DIR, d);
  //digitalPulse(STP, 1, steps);
  analogWrite(STP, 0.5, { freq : 1000/STP_VMAX });
  digitalPulse(LED1, 1, steps);
  //digitalPulse(STP, 1, 0);
  inpTarget=0;
  absPos += n > 0 ? steps.length/2 : -steps.length/2;
  digitalWrite(LED2, 1);
}

// State machine
function sm(st0, btn_d, motor_stop)
{ st1=st0;
  digitalWrite([LED2], 0);
  for(act=0;act<2;act++)
    switch(st1) {
      case 0:
        if (act) {
          digitalWrite([LED1,DIR,STP], 0);
          digitalWrite(nEN, 1);
          //pinMode(M0,  "opendrain" ); digitalWrite(M0, 1); // float 1/4 step
          pinMode(M1,  "output" );    digitalWrite(M1, 0); // low 1/4 step
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=10;}
        break;

      case 10:
        if (act) {
          digitalWrite(nEN, 0);
          digitalWrite(LED1, 1);
          move(-STP_TR, STP_VMIN);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=21;}
        else if (inpTarget<=0) {st1=11;}
        break;

      case 11:
        if (act) {
          absPos=0;
          move(POS_OFS[0]-absPos, STP_VMIN);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=21;}
        else if (inpTarget<=0) {st1=12;}
        break;

      case 12:
        if (act) {
          scan(+1);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=21;}
        else if (inpTarget<=0) {st1=13;}
        break;

      case 13:
        if (act) {
          scan(-1);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=21;}
        else if (inpTarget<=0) {st1=12;}
        break;

      case 21:
        if (act) {
         move(POS_OFS[1]-absPos, STP_VMIN);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=31;}
        else if (inpTarget<=0) {st1=22;}
        break;

      case 22:
        if (act) {
          scan(+1);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=31;}
        else if (inpTarget<=0) {st1=23;}
        break;

      case 23:
        if (act) {
          scan(-1);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=31;}
        else if (inpTarget<=0) {st1=22;}
        break;

      case 31:
        if (act) {
         move(POS_OFS[2]-absPos, STP_VMIN);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=41;}
        else if (inpTarget<=0) {st1=32;}
        break;

      case 32:
        if (act) {
          scan(+1);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=41;}
        else if (inpTarget<=0) {st1=33;}
        break;

      case 33:
        if (act) {
          scan(-1);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=41;}
        else if (inpTarget<=0) {st1=32;}
        break;

      case 41:
        if (act) {
          move(-absPos+ORG, STP_VMIN);
        }
        else if (inpTarget<=0) {st1=11;}
        break;

      default:
        st1=0;
        break;
  }
  inpBtn = 0;
  //console.log(st0 + "->" + st1);
  return st1;
}

// Button input
setWatch(function(e) {
  if (!e.state) {
    d=e.time-e.lastTime;
    if (d < 1) {
      clearTimeout(btnIntId);
      inpBtn = 1;
      digitalWrite(LED2, 1);
      }
  } else {
    btnIntId=setTimeout(function () {
      inpBtn=-1;
      digitalWrite(LED2, 1);
    }, 1000);
  }
}, BTN, { repeat: true, edge: 'both', debounce:100 });

// state machine step
setWatch(function(e) {
  curr_state = sm(curr_state);
}, LED2, { repeat: true, edge: 'rising' });

// First step
curr_state = sm(0);

//for (i=0;i<STP_ACC*2+6;i++){console.log(steps[i]);}
