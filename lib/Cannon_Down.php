<?php

/*
 * This script is for moving the cannon downwards. Its called by the function "Cannon_Down" in the control.js script.
 * Please mind the GPIOAllocation.txt.
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/Cannon_Down.php
 */

#Enable the wiringpi pin
shell_exec('gpio write 6 1');
#wait for three seconds
sleep(3);
#Swith it off
shell_exec('gpio write 6 0');

?>
