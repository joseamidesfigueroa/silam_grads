#!/bin/bash

#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#SCRIPT PARA GENERAR SALIDAS QUIMICAS
# Amides Figueroa - 2023
# juanfigueroa@ambiente.gob.sv
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

#GET THE DATE
year=`date -u +%Y`
month=`date -u +%m`
day=`date -u +%d`

#Run the GrADS script 
grads -bl <<EOF
sdfopen https://silam.fmi.fi/thredds/dodsC/dust_glob01_v5_7_2/runs/dust_glob01_v5_7_2_RUN_${year}-${month}-${day}T00:00:00Z
run polvo_general.gs
EOF