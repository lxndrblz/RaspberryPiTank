   <?php
     #shell_exec('sh startup.sh'); 
     #shell_exec('gpio mode 7 out');
     #shell_exec('gpio mode 3 out');
     #shell_exec('gpio mode 0 out');
     #shell_exec('gpio mode 1 out');
     #Feuer Funktion
     shell_exec('gpio mode 17 out');
     #Turm 
     shell_exec('gpio mode 2 out');
     shell_exec('gpio mode 4 out');     
     #Kannone AUF AB
     shell_exec('gpio mode 5 out');
     shell_exec('gpio mode 6 out');	

	/*
	LEDS
	*/
     shell_exec('gpio mode 19 out');
     shell_exec('gpio mode 18 out');
     shell_exec('gpio mode 20 out');

  ?>
