<?php
/*
 * This script is used for setting the gpio ports after while running, this script is called by the ajax function!
 * Each Shell_execute is setting one pin to one PWM Mode. The Value which is set as the PWM value is $left and right. 
 * Depending on whats set to the $directionleft and $directionright variable the depending pins will be set.
 *
 * Please mind the GPIOAllocation.txt.
 * Each track can take a direction (Forward and Backward) and PWM Value, which depends on the tilting of the device 
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/pwm.php 
 */



$left = $_POST["LEFTTRACK"];
$right = $_POST["RIGHTTRACK"];
$directionleft = $_POST["DIRECTIONLEFT"];
$directionright = $_POST["DIRECTIONRIGHT"];


if($directionleft == 'FORWARD' && $directionright =='FORWARD')
{ 
	/*

	Descreption:

				  Left   Right
					^     ^
					|     |
					|     |

	*/


	#Left Track
	shell_exec('echo "1=' . $left . '" > /dev/pi-blaster');
	#Right Track
	shell_exec('echo "2=' . $right . '" > /dev/pi-blaster');

}

else if($directionleft == 'BACKWARD' && $directionright =='BACKWARD')
{ 
	/*

	Descreption:

				  Left  Right 
					|     |
					|     |
	 				v     v
	*/
	#Left Track
	shell_exec('echo "3=' . $left. '" > /dev/pi-blaster');
	#Right Track
	shell_exec('echo "4=' . $right. '" > /dev/pi-blaster');

}
else if($directionleft == 'BACKWARD' && $directionright =='FORWARD')
{
	/*

	Descreption:

				  Left  Right 
					|     ^
					|     |
	 				v     |
	*/
	shell_exec('echo "2=' . $right . '" > /dev/pi-blaster');
	shell_exec('echo "3=' . $left .  '" > /dev/pi-blaster');
}
else if($directionleft == 'FORWARD' && $directionright =='BACKWARD')
{
	/*

	Descreption:

				  Left  Right 
					^     |
					|     |
	 				|     v
	*/

	shell_exec('echo "1=' . $right . '" > /dev/pi-blaster');
	shell_exec('echo "4=' . $left .  '" > /dev/pi-blaster');
}
else
{
	#If no movment: Stop all ports

	shell_exec('echo "0=0" > /dev/pi-blaster');
	shell_exec('echo "1=0" > /dev/pi-blaster');
	shell_exec('echo "2=0" > /dev/pi-blaster');
	shell_exec('echo "3=0" > /dev/pi-blaster');
	shell_exec('echo "4=0" > /dev/pi-blaster');

}

?>
