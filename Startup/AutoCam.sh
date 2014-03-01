#!/bin/bash

echo -----------------------------------------------
echo 
echo               Raspberry Pi Tank
echo        www.quaintproject.wordpress.com
echo                Alexander Bilz
echo 
echo -----------------------------------------------
rm -rf /tmp/stream
#Remotve Directory before creating new one!
echo Creating directory
mkdir /tmp/stream
raspistill --nopreview -w 640 -h 480 -q 5 -o /tmp/stream/pic.jpg -tl 100 -t 9999999 -th 0:0:0 &
#Start the service
LD_LIBRARY_PATH=/usr/local/lib mjpg_streamer -i "input_file.so -f /tmp/stream -n pic.jpg" -o "output_http.so -w /usr/local/www"

echo 
echo --------------Finished successfull-------------


