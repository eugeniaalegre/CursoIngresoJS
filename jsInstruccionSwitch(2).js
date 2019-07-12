function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);


switch(mesDelAño){

  case"Julio":
  case"Agosto":
  alert("invierno");
  break;

  case"Enero":

  case"Febrero":

  case"Marzo":
  alert("verano");
  break;
}



}//FIN DE LA FUNCIÓN
