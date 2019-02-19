var j = require("johnny-five");
var circuito = new j.Board();
var bombillo, motorcito, celda;

circuito.on("ready", prender);

function prender()
{
  var configuracion = {pin:"A0", freq: 50};
  celda = new j.Sensor(configuracion);

  bombillo = new j.Led(13);
  bombillo.on();

  motorcito = new j.Servo(9);
  motorcito.to(0);
  ondear();
}

//Timer, funcion recursiva
function ondear()
{
  console.log("Lux:" + celda.value);
  setTimeout(ondear, 1000);
}