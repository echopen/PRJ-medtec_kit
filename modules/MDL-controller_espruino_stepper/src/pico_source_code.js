var t0=getTime();            // Loading time

// Pololu DRV8825 constants
STP_TR = 200*4;  // 1/4 step M0:float, M1:low
nEN    = B15;
DIR    = A5;
STP    = A6;
M0     = B14;
M1     = B13;


SLOW_P  = 2;    // 10ms/step
ORG     = STP_TR/6;
POS_OFS = [ORG, ORG+STP_TR/3, ORG+2*STP_TR/3];
STP_ACC = 3;
STP_CST = 140;
STP_VMAX  = 0.381;
STP_PULSE = 0.15;

// global vars
var inpBtn=0;
var inpTarget=0;
var absPos=0;
var curr_state;
var stpIntId;
var btnIntId;
var target;
var steps=new Float32Array(2*(STP_ACC+STP_CST+STP_ACC));

for (s=0; s < 2*(STP_ACC+STP_CST+STP_ACC); s++)
{ if (s < STP_ACC) { dt=2.0/(1.0-Math.cos((s+1)/STP_ACC*Math.PI))*STP_VMAX; }
  else if (s < STP_ACC+STP_CST) { dt=0.381; }
  else if (STP_ACC+STP_CST+STP_ACC) { dt=2.0/(1.0-Math.cos((2*STP_ACC+STP_CST-s)/STP_ACC*Math.PI))*STP_VMAX; }
  steps[s*2]=STP_PULSE;
  steps[s*2+1]=dt-STP_PULSE;
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
{ d = n > 0 ? 1 : 0;
  inpTarget = Math.abs(n);
  absPos +=n;
  p2 = p/2;
  digitalWrite(DIR, d);
  stpIntId=setInterval(doStep, p);
}

function scan(n)
{ d = n > 0 ? 1 : 0;
  digitalWrite(DIR, d);
  digitalPulse(STP, 1, steps);
  digitalPulse(STP, 1, 0);
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
          move(-STP_TR, SLOW_P);
        }
        else if (inpBtn < 0) {st1=0;}
        else if (inpBtn > 0) {st1=21;}
        else if (inpTarget<=0) {st1=11;}
        break;

      case 11:
        if (act) {
          absPos=ORG;
          move(POS_OFS[0]-absPos, SLOW_P);
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
         move(POS_OFS[1]-absPos, SLOW_P);
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
         move(POS_OFS[2]-absPos, SLOW_P);
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
          move(-absPos+ORG, SLOW_P);
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
