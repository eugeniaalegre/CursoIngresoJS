/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
  var nombre

  var edad

  nombre = document.getElementById("edad").value;

  edad = document.getElementById("nombre").value;

  alert("su nombre es"+ nombre +"su edad es" + edad);


}

