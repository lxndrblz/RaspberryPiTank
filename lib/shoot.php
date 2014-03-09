<?php

/*
 * This script is for controlling the machinegun LED. Its called by the function "Shoot" in the control.js script.
 * Please mind the GPIOAllocation.txt.
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/shoot.php
 */

/*

The flicker effect is achived by switching the led on wiringpi port 18 on and off in a short amount of time.

*/

shell_exec('gpio write 18 1');
usleep(10000);
shell_exec('gpio write 18 0');
usleep(10000);
shell_exec('gpio write 18 1');
usleep(10000);
shell_exec('gpio write 18 0');
usleep(10000);
shell_exec('gpio write 18 1');
usleep(10000);
shell_exec('gpio write 18 0');

?>
