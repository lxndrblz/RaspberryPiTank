<?php

/*
 * This script is for moving the Turret right. Its called by the function "Turret_Right" in the control.js script.
 * Please mind the GPIOAllocation.txt.
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/Turret_Right.php
 */

shell_exec('gpio write 2 1');
sleep(5);
shell_exec('gpio write 2 0');

?>
