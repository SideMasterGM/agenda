window.onload = function(){
	document.getElementById("btn_login").onclick = ConfirmUser;
}

/*                        Login                                          */
/* --------------------------------------------------------------------  */
Users = new Array();
Users[0] = new Array(1);

Users[0][0] = "Side Master";
Users[0][1] = "Windows10";


function ConfirmUser(){
	var un = document.getElementById("username"),
		pw = document.getElementById("password");

	if (un.value == "" || pw.value == ""){
		alert("Por favor, rellene todos los campos.");
	} else {
		if (un.value == Users[0][0] && pw.value == Users[0][1]){
			alert("Bienvenido " + un.value);
			window.location.href="./agenda.html"
		} else {
			alert("Las credenciales ingresadas son incorrectas!.");
		}
	}
}
/* --------------------------------------------------------------------  */

Agenda = new Array(4);

Agenda[0] = new Array(4);
Agenda[0][0] = "Denis Espinoza";
Agenda[0][1] = "denis@yahoo.es";
Agenda[0][2] = "3151978";
Agenda[0][3] = "Ninguna";


Agenda[1] = new Array(4);
Agenda[1][0] = "Jerson Martinez";
Agenda[1][1] = "jerson@sidemasters.com";
Agenda[1][2] = "23534534";
Agenda[1][3] = "No hay descripción";

Agenda[2] = new Array(4);
Agenda[2][0] = "Winstong Ponce";
Agenda[2][1] = "winstong@microsoft.es";
Agenda[2][2] = "45345344";
Agenda[2][3] = "CEO Microsoft";

Agenda[3] = new Array(4);
Agenda[3][0] = "Winstong Rizo";
Agenda[3][1] = "winsp@nsa.gov.com";
Agenda[3][2] = "3434545";
Agenda[3][3] = "El hombre más rico que existe";

//Variables globales que obtienen un objeto.

var count = 4;

function iniciar(){
var name = document.getElementById("name"), 
	email = document.getElementById("email"),
	phone = document.getElementById("phone"), 
	notas = document.getElementById("notas");

	name.value = Agenda[0][0];
	email.value = Agenda[0][1];
	phone.value = Agenda[0][2];
	notas.value = Agenda[0][3];
}

function nuevo(){
	var name = document.getElementById("name");
	document.getElementById("email").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("notas").value = "";

	name.value = "";
	name.focus();
}

function guardar(){
	var name = document.getElementById("name"), 
		email = document.getElementById("email"),
		phone = document.getElementById("phone"), 
		notas = document.getElementById("notas");
	
	if (name.value == "" || email.value == "" || phone.value == "" || notas.value == ""){
		alert("Por favor, rellene todos los campos");
	} else {
		var valueToPush = {};
		
		valueToPush[0] = name.value;
		valueToPush[1] = email.value;
		valueToPush[2] = phone.value;
		valueToPush[3] = notas.value;

		Agenda.push(valueToPush);
		Agenda.sort();
		console.dir(Agenda);

		alert("Se ha guardado con éxito el registro de: " + Agenda[count][0]);
		count++;
		
		nuevo();
	}
}

function borrar(){
	var phone = document.getElementById("phone"); 
	var	name = document.getElementById("name");

	if (name.value == ""){
		alert("¿A quién elimino?");		
	} else {
		var r = confirm("¿Está seguro de querer eliminar a " + name.value + "?");
		
		if (r == true) {
			for (var i=0; i<count; i++){
				if (Agenda[i][2] == phone.value){
					Agenda.splice(i, 1);
					Agenda.sort();
					count--;
					console.log(i);
					console.dir(Agenda);

					if (Agenda[i] != undefined){
						name.value = Agenda[i][0];
						email.value = Agenda[i][1];
						phone.value = Agenda[i][2];
						notas.value = Agenda[i][3];
					} else {
						name.value = "";
						email.value = "";
						phone.value = "";
						notas.value = "";
					}
				}
			}
		}
		
	}

}

function anterior(){
	var name = document.getElementById("name"), 
		email = document.getElementById("email"),
		phone = document.getElementById("phone"), 
		notas = document.getElementById("notas");

	var pos = posicion();

	if (Agenda[pos-1] != undefined){
		name.value = Agenda[pos-1][0];
		email.value = Agenda[pos-1][1];
		phone.value = Agenda[pos-1][2];
		notas.value = Agenda[pos-1][3];
	} else {
		alert("No hay más por este lado.");
	}
}

function siguiente(){
	var name = document.getElementById("name"), 
		email = document.getElementById("email"),
		phone = document.getElementById("phone"), 
		notas = document.getElementById("notas");

	var pos = posicion();

	if (Agenda[pos+1] != undefined){
		name.value = Agenda[pos+1][0];
		email.value = Agenda[pos+1][1];
		phone.value = Agenda[pos+1][2];
		notas.value = Agenda[pos+1][3];

	} else {
		alert("No hay más por este lado.");
	}
}

function posicion(){
	var phone = document.getElementById("phone"); 

	for (var i=0; i<count; i++){
		if (Agenda[i][2] == phone.value){
			return i;
		}
	}
}

function primero(){
	var name = document.getElementById("name"), 
		email = document.getElementById("email"),
		phone = document.getElementById("phone"), 
		notas = document.getElementById("notas");

	name.value = Agenda[0][0];
	email.value = Agenda[0][1];
	phone.value = Agenda[0][2];
	notas.value = Agenda[0][3];
}

function ultimo(){
	var name = document.getElementById("name"), 
		email = document.getElementById("email"),
		phone = document.getElementById("phone"), 
		notas = document.getElementById("notas");

	name.value = Agenda[count-1][0];
	email.value = Agenda[count-1][1];
	phone.value = Agenda[count-1][2];
	notas.value = Agenda[count-1][3];
}