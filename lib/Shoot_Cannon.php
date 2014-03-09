<?php
/*
 * This script is used for providing the shoot function of the Maingun. Its called by the function "Shoot_Cannon" in the control.js script.
 * Please mind the GPIOAllocation.txt.
 *
 * If you want you could also add a sequence where the tank is moving backwards (eg. rebound)
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/Shoot_Cannon.php
 */
	shell_exec('gpio write 7 1');
	usleep(1250000);
	#Switch the gpio port off again
	shell_exec('gpio write 17 0');

?>
