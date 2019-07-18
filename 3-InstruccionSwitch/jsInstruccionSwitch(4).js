function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

	switch(mesDelAño){
    case"Febrero":
    alert("28 días");
    break;

    case"Junio":
    case"Septiembre":
    case"Noviembre":
    alert("30 días");
    break;

    default:
    alert("31 días");


  }



}//FIN DE LA FUNCIÓN
