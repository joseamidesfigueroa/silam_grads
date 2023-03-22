#<<----------------------------------------------------------->>
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

t=1
#%%%%%%%%%%% DEFINICION DE LAS HORAS DE PRONOSTICO %%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%% SET THE FORECAST HOURS %%%%%%%%%%%%%%%%%%%
while (t <= 120)

#<<----------------------------------------------------------->>
#%%%%%%%%%%%%%%%%%% PREPACION DEL MAPA %%%%%%%%%%%%%%%%%%%%%%%
#%%%%%%%%%%%%%%%%%%% PREPARE THE MAP %%%%%%%%%%%%%%%%%%%%%%%%%

#'set xsize 1400 1050'
'set mpdset hires'
'set display color white'
'set gxout shaded'
'set lat 0 45'
'set lon -100 0'
#<<----------------------------------------------------------->>
'c'
'set t 't''
#'set t last'
'polvo=cnc_dust*1000000000'
'polvo=polvo*7'
#'polvo=cnc_dust'
#'color 0 100 1 -kind darkslategray->lightcyan->paleturquoise->cornflowerblue->mediumpurple->orange->yellow->red->firebrick->maroon'
'color 0 500 5 -kind darkslategray->palegoldenrod->moccasin->gainsboro->aliceblue->lightcyan->paleturquoise->cornflowerblue->mediumpurple->orange->yellow->red->firebrick->maroon'
'd polvo'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Concentracion de polvo en el aire (microgramos) para 't1''
'printim /home/arw/salidaschem/polvo/images/'t'.png x1920 y1440'
#<<----------------------------------------------------------->>
############################################################
############################################################
############################################################


#<<----------------------------------------------------------->>

t=t+1
#'reset'
endwhile
#<<----------------------------------------------------------->>
