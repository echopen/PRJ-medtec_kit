#!/bin/bash

#shell script to install minimal configuration for using echop kit

#light installation
sudo apt-get install vim
sudo apt-get install sshpass
sudo apt-get install gnuplot
sudo add-apt-repository --yes ppa:js-reynaud/kicad-4
sudo apt-get update
sudo apt-get install kicad
sudo apt-get install xsltproc

#tools for compiling and sending RedPitaya scripts
sudo apt-get-repository ppa:linaro-maintainers/toolchain
sudo apt-get update
sudo apt-get install buil-essential
sudo apt-get install gcc-arm-linux-gnueabi

sh ./src/install.sh


exit 0
