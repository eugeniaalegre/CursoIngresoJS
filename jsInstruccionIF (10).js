function mostrar()
{
  //Genero el número RANDOM entre 1 y 10

  var notas

  notas = alert(Math.floor(Math.random() * (11-1))+(1));

  if(notas >= 9){

    alert("excelente");

  } else{

      if(notas > 4){

        alert("aprobado");

      } else{

      alert("la proxima se puede");

    }
  }




}//FIN DE LA FUNCIÓN


