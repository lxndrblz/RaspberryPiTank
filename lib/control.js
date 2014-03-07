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
console.log("DeviceOrientation funktioniert");
window.addEventListener('deviceorientation', function(eventData) {
var LR = eventData.gamma;
var FB = eventData.beta;
var DIR = eventData.alpha;

deviceOrientationHandler(LR, FB, DIR);
}, false);
} else {
alert("Not supported on your device or browser. Sorry.");
}

function deviceOrientationHandler(LR, FB, DIR) {
/*

If a webkit browser like chrome is used
*/
//document.getElementById("imgLogo").style.webkitTransform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";

//for HTML5 standard-compliance
//document.getElementById("imgLogo").style.transform = "rotate("+ LR +"deg) rotate3d(1,0,0, "+ (FB*-1)+"deg)";
//Ajax


if(LR < -10)
{
  document.getElementById("foo").innerHTML = "Rechts";
        

  if(Math.abs(FB) < 10 )
        {


  document.getElementById("foo").innerHTML = "Auf der Stelle links" + Math.max(0, Math.min((LR*-4)/100, 1)); 



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
  

    document.getElementById("foo").innerHTML = "Auf der Stelle Rechts" + Math.max(0, Math.min((LR*4)/100, 1)); 
  

  
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

  document.getElementById("foo").innerHTML = "Nur Rückwärts" +  Math.max(0, Math.min((FB*4)/100, 1)); 
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

document.getElementById("foo").innerHTML = "Nur Vorwärts" + Math.max(0, Math.min((-1)*(FB*4)/100, 1)) ; 

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


function Initialisieren()
{
$.ajax({
url: '/lib/init.php',

});
//document.getElementById("foo").innerHTML = ""; 

//}
  
  
alert("Initialisieren erfolgreich!");
}

function Shoot()
{
//Hier kommt die Schussfunktion
$.ajax({
url: '/lib/shoot.php',
});
//alert("Schuss");
}
function Shoot_Canon()
{
$.ajax({
url: '/lib/Shoot_Canon.php',
});
alert("Kanone");
}
function Turm_Rechts()
{
$.ajax({
url: '/lib/Turm_Rechts.php',
});
}
function Turm_Links()
{
$.ajax({
url: '/lib/Turm_Links.php',
});
}
function Canon_Up()
{
$.ajax({
url: '/lib/Canon_Up.php',
});
//alert("Kanone aufwärts");
}
function Canon_Down()
{
$.ajax({
url: '/lib/Canon_Down.php',
});
}


