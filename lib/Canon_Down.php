<?php
shell_exec('gpio write 6 1');
sleep(3);
shell_exec('gpio write 6 0');

?>
