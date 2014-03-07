<?php

shell_exec('gpio write 17 1');
shell_exec('gpio write 0 l');
shell_exec('gpio write 7 1');
usleep(150000);
shell_exec('gpio write 0 0');
shell_exec('gpio write 7 0');
usleep(1100000);
shell_exec('gpio write 17 0');

?>
