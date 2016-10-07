E.on('init', function() {
  on=0;
fps_cons=15;
p_cons=1/fps_cons;
console.log(p_cons);
pwm_min=0.85;
pinMode(A8, "input_pulldown");
pinMode(B0, "output");
p0=0;
p1=0;
pwm_cons=pwm_min;

setWatch(function(e) {
  digitalWrite(LED1,e.state);
  p0=p1;
  p1=e.time-e.lastTime;
  pwm_inc = ((p_cons-p1 > 0) - 0.5)/100;
  //console.log(on);
  pwm_cons += pwm_inc;
  if (on) { analogWrite(B0, pwm_cons, {freq:100}); }
  else {analogWrite(B0,1);}
  //console.log(pwm_cons);
}, A8, { repeat: true, edge: 'both' });

setWatch(function(e) {
  on=1-on;
  analogWrite(B0, pwm_min, {freq:100});
}, BTN, { repeat: true, edge: 'rising', debounce:100 });
});