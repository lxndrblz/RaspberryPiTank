<?php
shell_exec('python Cannon.py');
//usleep(10000);
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
//shell_exec('mpg321 267697_SOUNDDOGS__gu.mp3')
?>
