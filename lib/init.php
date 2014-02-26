 <?php 
/**
 * This script is used for initializing the gpio ports after startup, this process has to be done once!
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

     /*
     Set the GPIO pins for the basic movement to out. I do this by running the wiringpi commands.
     */
     shell_exec('gpio mode 7 out');
     shell_exec('gpio mode 3 out');
     shell_exec('gpio mode 0 out');
     shell_exec('gpio mode 1 out');
     #Main  Cannon
     shell_exec('gpio mode 17 out');
     #Turret
     shell_exec('gpio mode 2 out');
     shell_exec('gpio mode 4 out');     
     #Cannon up and down
     shell_exec('gpio mode 5 out');
     shell_exec('gpio mode 6 out');	

	/*
	LEDS
    forward, backward, machine gun
	*/
     shell_exec('gpio mode 19 out');
     shell_exec('gpio mode 18 out');
     shell_exec('gpio mode 20 out');
?>
