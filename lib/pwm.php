<?php
/*
 * This script is used for setting the gpio ports after while running, this script is called by the ajax function!
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
#Left Track
shell_exec('echo "1=' . $left . '" > /dev/pi-blaster');
#Right Track
shell_exec('echo "2=' . $right . '" > /dev/pi-blaster');
shell_exec('gpio write 20 1');
}

else if($directionleft == 'BACKWARD' && $directionright =='BACKWARD')
{ 
#Left Track
shell_exec('echo "3=' . $left. '" > /dev/pi-blaster');
#Right Track
shell_exec('echo "4=' . $right. '" > /dev/pi-blaster');
shell_exec('echo "0=1" > /dev/pi-blaster');
}
else if($directionleft == 'BACKWARD' && $directionright =='FORWARD')
{
shell_exec('echo "2=' . $right . '" > /dev/pi-blaster');
shell_exec('echo "3=' . $left .  '" > /dev/pi-blaster');
}
else if($directionleft == 'FORWARD' && $directionright =='BACKWARD')
{
shell_exec('echo "1=' . $right . '" > /dev/pi-blaster');
shell_exec('echo "4=' . $left .  '" > /dev/pi-blaster');
}
else
{

shell_exec('echo "0=0" > /dev/pi-blaster');
shell_exec('echo "1=0" > /dev/pi-blaster');
shell_exec('echo "2=0" > /dev/pi-blaster');
shell_exec('echo "3=0" > /dev/pi-blaster');
shell_exec('echo "4=0" > /dev/pi-blaster');
/*
Switch led off
-Forward
*/
shell_exec('gpio write 20 0');
}

?>
