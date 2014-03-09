<?php
 /* This script is for moving the cannon upwards. Its called by the function "Cannon_Up" in the control.js script.
 * Please mind the GPIOAllocation.txt.
 *
 * PHP version 5
 *
 * @package    RaspberryPiTank
 * @author     Alexander Bilz
 * @copyright  2014 quaintproject.wordpress.com
 * @license    https://raw.github.com/quaintproject/RaspberryPiTank/master/LICENSE
 * @link       https://raw.github.com/quaintproject/RaspberryPiTank/master/lib/Cannon_Up.php
 */
#Enable the gpio pin
shell_exec('gpio write 5 1');
#Wait three seconds
sleep(3);
#switch off
shell_exec('gpio write 5 0');

?>
