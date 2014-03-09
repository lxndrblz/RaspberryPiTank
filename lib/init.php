   <?php

/*
 * This script is used for initializing the gpio ports from wiring pi. Its called by the function "Initialize" in the control.js script.
 * Please mind the GPIOAllocation.txt.
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/init.php
 */


     #Initialize Main Cannon funtion
     shell_exec('gpio mode 17 out');
     #Turret right and left
     shell_exec('gpio mode 2 out');
     shell_exec('gpio mode 4 out');     
     #Cannon up and down
     shell_exec('gpio mode 5 out');
     shell_exec('gpio mode 6 out');	

	 /*
	 LEDS
	 */
     shell_exec('gpio mode 19 out');
     shell_exec('gpio mode 18 out');
     shell_exec('gpio mode 20 out');

  ?>
