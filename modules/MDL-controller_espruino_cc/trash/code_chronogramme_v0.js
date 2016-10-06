var chrono;

// Initialisation des constantes
function config_start(){
  chrono=init_chrono(60, 200, 15, 0.1);
}

// Calcul du timing des tirs en fonction de la sonde
function init_chrono(a_sect, nb_tirs, fps, pulse){
  var tab=new Float32Array(nb_tirs*2-1);
  var a_tir;
  var a_mot;
  var t_tir;
  a_sect = a_sect/180*Math.PI;
  var t_frame = 1/fps*1000;

  for (var tir=1;tir<nb_tirs;tir++) {
    a_tir = tir/nb_tirs*a_sect;
    a_tir_1 = a_tir-1/nb_tirs*a_sect;
    da_mot = Math.asin((a_tir/(a_sect/2)-1)) - Math.asin((a_tir_1/(a_sect/2)-1));
    dt_tir = da_mot/Math.PI*t_frame;
    tab[tir*2-2]=pulse;
    tab[tir*2-1]=dt_tir-pulse;
  }
  tab[nb_tirs*2-2]=pulse;
  return tab;
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
digitalPulse(LED2,1,chrono);