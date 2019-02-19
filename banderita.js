//Guardamos la libreria
var j = require("johnny-five");
//funcion entre de conexion entre JavaScript y Arduino se guarda en circuito
var circuito = new j.Board();
var bombillo, motorcito, celda;
var turno = 0;

//Cuando el circuito esta listo, ejecuta la funcion
circuito.on("ready", prender);

function prender()
{
  //capturamos la señal de la fotocelda como un objeto JSON
  var configuracion = {pin:"A0", freq: 50};
  celda = new j.Sensor(configuracion);

  //encendido
  bombillo = new j.Led(13);
  bombillo.on();

  //mover
  motorcito = new j.Servo(9);
  motorcito.to(0);

  //invocamos funcion recursiva
  ondear();
}

//Timer, funcion recursiva que se llama a si misma cada segundo para preguntar a la celda cuanta luz tiene
function ondear()
{
  console.log("Luz:" + celda.value);
  var luz = celda.value;
  //si la cantidad de luz es mayor a 800 la bandera se mueve si no queda quieta.
  if(luz > 800)
  {
    if(turno)
    {
      turno = 0;
      motorcito.to(70);
    }
  }
  else {
    turno = 1;
    motorcito.to(110);
  }
  //invocamos la funcion a si misma cada 1 segundo
  setTimeout(ondear, 1000);
}
//remplazar la fotoresistencia por sensor de humedad y cervo por una bomba de agua