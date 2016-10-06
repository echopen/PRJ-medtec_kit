//reset();
var t0=getTime();            // Pour mesure durée initialisation

// Initialisation des constantes
A_SECT    =30 / 180*Math.PI;  // +/- 30° en rad
NB_TIRS   =100;               // Nbre de tirs par 1/2 frame [-10, +9]
FPS       =15;                // Nbre de frames par s (aller ou retours)
PULSE_TIR =0.02;              // Durée d'un pulse 20µs

IN_TOP    =A8;                // Entrée top/tour A8
OUT_MOT   =B0;                // Sortie moteur B0 (mosfet interne)
OUT_TIR   =B1;                // Sortie pulse B1 (mosfet externe) ou LED2;

PWM_SLOW  =0.25;              // Petite vitesse
PWM_STOP  =0;                 // Arrêt
PWM_FREQ  =200;               // Fréquence PWM

// Variables globales
var chrono;
var mot_on;
var mot_pwm;
var p_cons;

// Calcul du timing des tirs en fonction de la sonde
chrono=new Float32Array(NB_TIRS*2*2-1);
var a_tir;
var a_mot;
var t_tir;
A_SECT = A_SECT/180*Math.PI;
var t_frame = 1/FPS*1000;

// Formule-2 équidistance sur cible circulaire
for (var tir=-NB_TIRS+1; tir<NB_TIRS; tir++) {
  a_tir   = tir    /NB_TIRS*A_SECT;
  a_tir_1 = (tir-1)/NB_TIRS*A_SECT;
  da_mot = Math.asin(Math.tan(a_tir)/Math.tan(A_SECT)) - Math.asin(Math.tan(a_tir_1)/Math.tan(A_SECT));
  dt_tir = da_mot/Math.PI*t_frame;
  chrono[tir*2-2 + NB_TIRS*2]=PULSE_TIR;
  chrono[tir*2-1 + NB_TIRS*2]=dt_tir-PULSE_TIR;
}
console.log(tir);
chrono[NB_TIRS*2-2 + NB_TIRS*2]=PULSE_TIR;

// Initialise l'action bouton (M/A moteur)
mot_on=0;
pinMode(OUT_MOT, "output");
analogWrite(OUT_MOT, 1-PWM_STOP, {freq:PWM_FREQ});

setWatch(function(e) {
  mot_on=1-mot_on;
  if (mot_on) { mot_pwm=1-PWM_SLOW;  }
  else { mot_pwm=1-PWM_STOP; }
  analogWrite(OUT_MOT, mot_pwm, {freq:PWM_FREQ});
}, BTN, { repeat: true, edge: 'rising', debounce:100 });


// Initialise l'action top tour (régul moteur et déclenche tirs)
p_cons=1/FPS;
pinMode(IN_TOP, "input_pulldown");
pinMode(OUT_TIR, "output");

setWatch(function(e) {
  digitalWrite(LED1, e.state);
  if (mot_on) {
    p=e.time-e.lastTime;
    pwm_inc = ((p_cons-p > 0) - 0.5)/100;
    mot_pwm += pwm_inc;
    analogWrite(OUT_MOT, mot_pwm, {freq:PWM_FREQ});
    if (e.state) {digitalPulse(OUT_TIR,1,chrono);} else {digitalPulse(OUT_TIR,1,chrono);}
    //digitalPulse(OUT_TIR,1,0.5);
  }
}, IN_TOP, { repeat: true, edge: 'both' });

// Logs en cours de développement
console.log((getTime()-t0)*1000);
//console.log(process.env);
//console.log(process.version);
console.log(process.memory());
console.log(chrono);
console.log("OK !");

