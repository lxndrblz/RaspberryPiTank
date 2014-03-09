/*
<!-- 
 
File:           control.js
Version:        Revision: 1
Last changed:   Date: 2014/03/07 17:00:00
Purpose:        This script will provide all the functions for running the tank on the client side.
Author:         Alexander Bilz
Copyright:      (C) 2014
Product:        Raspberry Pi Abrams Tank
 
-->
*/
if (window.DeviceOrientationEvent) {
console.log("DeviceOrientation works!");
window.addEventListener('deviceorientation', function(eventData) {
var LR = eventData.gamma;
var FB = eventData.beta;
var DIR = eventData.alpha;



deviceOrientationHandler(LR, FB, DIR);
}, false);
} else {

//Display a message if a browser is used, that is not supported

alert("Not supported on your device or browser. Sorry.");
}

function deviceOrientationHandler(LR, FB, DIR) {
/*

If a webkit browser like chrome is used
*/

if(LR < -10)
{
  document.getElementById("foo").innerHTML = "Right";
        

  if(Math.abs(FB) < 10 )
        {


  document.getElementById("foo").innerHTML = "Turning Left" + Math.max(0, Math.min((LR*-4)/100, 1)); 



      var formData = {LEFTTRACK:Math.max(0, Math.min((LR*-4)/100, 1)), RIGHTTRACK:Math.max(0, Math.min((LR*-4)/100, 1)),DIRECTIONLEFT:'FORWARD', DIRECTIONRIGHT:'BACKWARD'};
        $.ajax({

        url : '/lib/pwm.php',
        type: 'POST',
        data: formData
        });
        }
        else
        {
        if(FB < 0)
          {
            //tilted towards the left front corner  
            //Forward left
          
            var speedright = Math.max(0, Math.min((FB*-4)/100, 1));
            var speedleft = Math.max(0, Math.min((LR*-4)/100, 1));
            
            speedleft = Math.max(0, Math.min(speedleft, 1));
            speedright = Math.max(0, Math.min(speedleft*(1+speedright), 1));
            document.getElementById("foo").innerHTML = "right speed: " + speedright + "left speed:" + speedleft;
          
            var formData = {LEFTTRACK:speedleft, RIGHTTRACK:speedright ,DIRECTIONLEFT:'FORWARD', DIRECTIONRIGHT: 'FORWARD'};
            $.ajax({

            url : '/lib/pwm.php',
            type: 'POST',
            data: formData
            });   

          }
          else
          {
            //The device is tilted towards the left bottom corner 
            //backward left 

            var speedright = Math.max(0, Math.min((FB*4)/100, 1));
            var speedleft = Math.max(0, Math.min((LR*-4)/100, 1));
            speedleft = Math.max(0, Math.min(speedleft, 1));
            speedright = Math.max(0, Math.min(speedleft*(1+speedright), 1));
            document.getElementById("foo").innerHTML = "Right SPEED" + speedright + "Left SPEED" + speedleft;
          
            var formData = {LEFTTRACK:speedleft, RIGHTTRACK:speedright ,DIRECTIONLEFT:'BACKWARD', DIRECTIONRIGHT: 'BACKWARD'};
            $.ajax({

            url : '/lib/pwm.php',
            type: 'POST',
            data: formData
            });

          }

        }





}
else if(LR>10)
{
    
  if(Math.abs(FB) < 10 )
  {
  

    document.getElementById("foo").innerHTML = "Turning Right" + Math.max(0, Math.min((LR*4)/100, 1)); 
  

  
    var formData = {LEFTTRACK:Math.max(0, Math.min((LR*4)/100, 1)), RIGHTTRACK:Math.max(0, Math.min((LR*4)/100, 1)),DIRECTIONLEFT:'FORWARD', DIRECTIONRIGHT:'BACKWARD'};
    $.ajax({

    url : '/lib/pwm.php',
    type: 'POST',
    data: formData
    });

  }
 else
  {
    if(FB < 0)
    {
    //tilted towards the left front corner  
    //Forward right 
    
    var speedright = Math.max(0, Math.min((FB*-4)/100, 1));
    var speedleft = Math.max(0, Math.min((LR*4)/100, 1));
    speedright = Math.max(0, Math.min(speedright, 1));
    speedleft = Math.max(0, Math.min(speedright * (1 + speedleft), 1));
    document.getElementById("foo").innerHTML = "Right SPEED" + speedright + "Left SPEED" + speedleft;
    
    var formData = {LEFTTRACK:speedleft, RIGHTTRACK:speedright ,DIRECTIONLEFT:'FORWARD', DIRECTIONRIGHT: 'FORWARD'};
    $.ajax({

    url : '/lib/pwm.php',
    type: 'POST',
    data: formData
    });   

    }
    else
    {
    //tilted towards the left bottom corner 
    //Backward right  
  
    var speedright = Math.max(0, Math.min((FB*4)/100, 1));
    var speedleft = Math.max(0, Math.min((LR*4)/100, 1));
    speedright = Math.max(0, Math.min(speedright, 1));
    speedleft = Math.max(0, Math.min(speedright * (1 + speedleft), 1));
    document.getElementById("foo").innerHTML = "Right SPEED" + speedright + "Left SPEED" + speedleft;
      
    var formData = {LEFTTRACK:speedleft, RIGHTTRACK:speedright ,DIRECTIONLEFT:'BACKWARD', DIRECTIONRIGHT: 'BACKWARD'};
    $.ajax({

    url : '/lib/pwm.php',
    type: 'POST',
    data: formData
    });

    }
  

  }
}

else if (FB > 10 && Math.abs(LR) < 10)
  {

      document.getElementById("foo").innerHTML = "Only backwards" +  Math.max(0, Math.min((FB*4)/100, 1)); 
    var poststr = (FB *4)/100;  

    var formData = {LEFTTRACK:Math.max(0, Math.min((FB*4)/100, 1)), RIGHTTRACK:Math.max(0, Math.min((FB*4)/100, 1)),DIRECTIONLEFT:'BACKWARD', DIRECTIONRIGHT: 'BACKWARD'};


    $.ajax({

    url : '/lib/pwm.php',
    type: 'POST',
    data: formData
    });

  }
else if (FB < -5 && Math.abs(LR) < 10)
  {
    //Clamp the value betweeen 0 and 1

    document.getElementById("foo").innerHTML = "Only Forward" + Math.max(0, Math.min((-1)*(FB*4)/100, 1)) ; 

    var formData = {LEFTTRACK:Math.max(0, Math.min((-1)*(FB*4)/100, 1)), RIGHTTRACK:Math.max(0, Math.min((-1)*(FB*4)/100, 1)),DIRECTIONLEFT:'FORWARD', DIRECTIONRIGHT:'FORWARD'};
    $.ajax({

    url : '/lib/pwm.php',
    type: 'POST',
    data: formData
    });
  }
else

  {
    var formData = {LEFTTRACK:0, RIGHTTRACK:0, DIRECTIONRIGHT:'STOP', DIRECTIONLEFT:'STOP'};

    $.ajax({

    url : '/lib/pwm.php',
    type: 'POST',
    data: formData
    });
    document.getElementById("foo").innerHTML = ""; 

  }

}


function Initialize())
{

//Used for initializing the wiringpi ports

$.ajax({
url: '/lib/init.php',

});
  
alert("Initialisieren erfolgreich!");
}

function Shoot()
{
//Used for enabling the machine gun
$.ajax({
url: '/lib/shoot.php',
});

}
function Shoot_Cannon()
{
//Used for shooting the main cannon
$.ajax({
url: '/lib/Shoot_Cannon.php',
});
alert("Kanone");
}
function Turret_Right()
{
//Used for moving the turret right
$.ajax({
url: '/lib/Turret_Right.php',
});
}
function Turret_Left()
{

//Used for moving the turret left
$.ajax({
url: '/lib/Turret_Left.php',
});
}
function Cannon_Up()
{
//Used for moving the Cannon up
$.ajax({
url: '/lib/Cannon_Up.php',
});

}
function Cannon_Down()
{
//Used for moving the Cannon down
$.ajax({
url: '/lib/Cannon_Down.php',
});
}


