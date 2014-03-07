<?php
shell_exec('gpio write 2 1');
sleep(5);
shell_exec('gpio write 2 0');
?>
