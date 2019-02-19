//traemos la libreria
var jf = require("johnny-five");
//nueva clase de tipo Board de Johnny-Five
var circuito = new jf.Board();

//cuando el circuito esta listo dispara la funcion
circuito.on("ready", prender);

function prender()
{
    //a led le decimos que es el puerto 12
    var led = new jf.Led(13);
    //instancia del objeto led, parpadea cada 500 milisegundos
    led.blink(500);
}