$(function() {
randomNums();
$( "#submit" ).click(function(e) {
  e.preventDefault();
  addNums();  
  });

});

function addNums(){

	var answer = document.getElementById("answer").value;

	var digit1 = parseInt(document.getElementById("digit1").innerHTML);

	var digit2 = parseInt(document.getElementById("digit2").innerHTML);

	var sum = digit1 + digit2;

	if(answer == ""){

		alert("Por favor ingrese el resultado de la suma");
		document.getElementById("status").value = "";

	}else if(answer != sum){

		alert("Resultado de la suma incorrecto");
		document.getElementById("status").value = "";

	}else{

	
		document.getElementById("status").innerHTML = "Su mensaje ha sido enviado, muchas gracias por su interés";

		document.getElementById("answer").value = "";
		document.getElementById("txtNombre").value = " ";
		document.getElementById("email").value = " ";
		document.getElementById("txtComment").value = " ";

	}

	

	

}

function randomNums(){

	var rand_num1 = Math.floor(Math.random() * 10) + 1;

	var rand_num2 = Math.floor(Math.random() * 10) + 1;

	document.getElementById("digit1").innerHTML = rand_num1;

	document.getElementById("digit2").innerHTML = rand_num2;

}



  