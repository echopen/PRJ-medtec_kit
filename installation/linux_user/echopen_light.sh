#!/bin/bash

#shell script to install minimal configuration for using echop kit

sudo apt-get install vim
sudo apt-get install sshpass
sudo apt-get install gnuplot
sudo add-apt-repository --yes ppa:js-reynaud/kicad-4
sudo apt-get update
sudo apt-get install kicad
sudo apt-get install xsltproc

exit 0
