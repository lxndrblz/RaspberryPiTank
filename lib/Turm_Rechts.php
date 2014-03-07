<?php
shell_exec('gpio write 4 1');
sleep(5);
shell_exec('gpio write 4 0');

?>
