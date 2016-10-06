var t0=getTime();            // Loading time

// Pololu DRV8825 constants
STP_TR = 200*4;  // 1/4 step Mx=010
nEN    = A5;
DIR    = A6;
STP    = A7;

SLOW_P = 1;    // 100ms/step


// global vars
var curr_state;
var intId;
var target;

// move n steps @ p ms
function doStep()
   { digitalPulse(STP, 1, p2);
     target--;
     if (target<=0) {clearInterval(intId);}
   }

function move(n, p)
{ d = n > 0 ? 1 : 0;
  target = Math.abs(n);
  p2 = p/2;
  digitalWrite(DIR, d);
  intId=setInterval(doStep, SLOW_P);
}

// State machine
function sm(st0, btn_d)
{ st1=st0;
  for(act=0;act<2;act++)
    switch(st1) {
      case 0:
        if (act) {
          digitalWrite([LED1,LED2,DIR,STP], 0);
          digitalWrite(nEN, 1);
        }
        else if (btn_d < 0) {st1=0;}
        else if (btn_d > 0) {st1=1;}
        break;

      case 1:
        if (act) {
          digitalWrite(nEN, 0);
          digitalWrite([LED1,LED2], 0b10);
          move(STP_TR, SLOW_P);
        }
        else if (btn_d < 0) {st1=0;}
        else if (btn_d > 0) {st1=2;}
        break;

      case 2:
        if (act) {
          digitalWrite([LED1,LED2], 0b01);
        }
        else if (btn_d < 0) {st1=0;}
        else if (btn_d > 0) {st1=1;}
        break;

      default:
        st1=0;
        break;
  }
  console.log(btn_d);
  console.log(st0 + "->" + st1);
  return st1;
}

// Button input
setWatch(function(e) {
  if (!e.state) {
    d=e.time-e.lastTime;
    if (d < 1) {
      clearTimeout(stid);
      curr_state = sm(curr_state, d);
      }
  } else {
    stid=setTimeout(function () {
      curr_state = sm(curr_state, -1);
    }, 1000);
  }
}, BTN, { repeat: true, edge: 'both', debounce:100 });

// First step
curr_state = sm(0, 0);