<?php
shell_exec('gpio write 5 1');
sleep(3);
shell_exec('gpio write 5 0');

?>
