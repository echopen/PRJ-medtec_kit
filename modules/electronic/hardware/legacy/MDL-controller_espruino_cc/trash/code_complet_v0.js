var chrono;
var mot_on;
var mot_pwm;
var p_cons;

// Initialisation des constantes
function config_start(){
  A_SECT=60;
  NB_TIRS=200;
  FPS=15;
  PULSE_TIR=0.1;

  IN_TOP=A8;
  OUT_MOT=B0;
  OUT_TIR=LED2;//B1;//LED2;

  PWM_SLOW=0.85;
  PWM_STOP=1;
  PWM_FREQ=200;

  init_chrono();
  init_btn();
  init_top();
}

// Calcul du timing des tirs en fonction de la sonde
function init_chrono(){
  chrono=new Float32Array(NB_TIRS*2-1);
  var a_tir;
  var a_mot;
  var t_tir;
  A_SECT = A_SECT/180*Math.PI;
  var t_frame = 1/FPS*1000;

  for (var tir=1;tir<NB_TIRS;tir++) {
    a_tir = tir/NB_TIRS*A_SECT;
    a_tir_1 = a_tir-1/NB_TIRS*A_SECT;
    da_mot = Math.asin((a_tir/(A_SECT/2)-1)) - Math.asin((a_tir_1/(A_SECT/2)-1));
    dt_tir = da_mot/Math.PI*t_frame;
    chrono[tir*2-2]=PULSE_TIR;
    chrono[tir*2-1]=dt_tir-PULSE_TIR;
  }
  chrono[NB_TIRS*2-2]=PULSE_TIR;
}

// Initialise l'action bouton (M/A moteur)
function init_btn(){
  mot_on=0;
  pinMode(OUT_MOT, "output");
  analogWrite(OUT_MOT, PWM_STOP, {freq:PWM_FREQ});

  setWatch(function(e) {
    mot_on=1-mot_on;
    if (mot_on) { mot_pwm=PWM_SLOW;  }
    else { mot_pwm=PWM_STOP; }
    analogWrite(OUT_MOT, mot_pwm, {freq:PWM_FREQ});
  }, BTN, { repeat: true, edge: 'rising', debounce:100 });
}



// Initialise l'action top tour (régul moteur et déclenche tirs)
function init_top(){
  p_cons=1/FPS;
  pinMode(IN_TOP, "input_pulldown");
  pinMode(OUT_TIR, "output");

  setWatch(function(e) {
    digitalWrite(LED1, e.state);
    if (mot_on) {
      p=e.time-e.lastTime;
      pwm_inc = ((p_cons-p > 0) - 0.25)/100;
      mot_pwm += pwm_inc;
      analogWrite(OUT_MOT, mot_pwm, {freq:PWM_FREQ});
      digitalPulse(OUT_TIR,1,chrono);
    }
  }, IN_TOP, { repeat: true, edge: 'both' });

}

// Séquence de boot du µC
E.on('init', config_start);
var t0=getTime();
config_start();

console.log((getTime()-t0)*1000);
//console.log(process.env);
//console.log(process.version);
console.log(process.memory());
console.log(chrono);

