/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
var numero1
var numero2

function sumar()

{
  numero1 = document.getElementById("numeroUno").value;
  numero1 = parseInt(numero1);

  numero2 = document.getElementById("numeroDos").value;
  numero2 = parseInt(numero2);
  alert(numero1 + numero2);

}

function restar()
{
  numero1 = document.getElementById("numeroUno").value;
  numero1 = parseInt(numero1);

  numero2 = document.getElementById("numeroDos").value;
  numero2 = parseInt(numero2);

  alert(numero1 - numero2);

}

function multiplicar()
{
  numero1 = document.getElementById("numeroUno").value;
  numero1 = parseInt(numero1);

  numero2 = document.getElementById("numeroDos").value;
  numero2 = parseInt(numero2);

  alert(numero1 * numero2);
}

function dividir()
{
  numero1 = document.getElementById("numeroUno").value;
  numero1 = parseInt(numero1);

  numero2 = document.getElementById("numeroDos").value;
  numero2 = parseInt(numero2);

  alert(numero1 / numero2);

}

