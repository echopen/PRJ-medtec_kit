mv croaker MDL-arduino_wifi_daq 
mv tobo MDL-pulser_ic 
mv goblin MDL-analog_processing_ic 
mv mogaba MDL_breadboard_supply 
mv cletus MDL-piezoservo 
mv oneeye MDL-pulser_control 

grep -rli '](/croaker/' --include \*.md | xargs -i@ sed -i 's/](\/croaker\//](\/electronic\/module\/hardware\/MDL-arduino_wifi_daq\//g' @
grep -rli '](/tobo/'    --include \*.md | xargs -i@ sed -i 's/](\/tobo\//](\/electronic\/module\/hardware\/MDL-pulser_ic\//g' @
grep -rli '](/goblin/'  --include \*.md | xargs -i@ sed -i 's/](\/goblin\//](\/electronic\/module\/hardware\/MDL-analog_processing_ic\//g' @
grep -rli '](/mogaba/'  --include \*.md | xargs -i@ sed -i 's/](\/mogaba\//](\/electronic\/module\/hardware\/MDL_breadboard_supply\//g' @
grep -rli '](/cletus/'  --include \*.md | xargs -i@ sed -i 's/](\/cletus\//](\/electronic\/module\/hardware\/MDL-piezoservo\//g' @
grep -rli '](/oneeye/'  --include \*.md | xargs -i@ sed -i 's/](\/oneeye\//](\/electronic\/module\/hardware\/MDL-pulser_control\//g' @


grep -rli 'onic/module/hard'  --include \*.md | xargs -i@ sed -i 's/onic\/module\/hard/onic\/modules\/hard/g' @



