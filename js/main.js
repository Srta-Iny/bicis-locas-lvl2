function validateForm(){
	var mensajeAlerta;
	// validando nombre 
	var nameObligatorio = document.getElementById('name').value;
	var nameContainer = document.querySelector('.name-container');
	var errorNombre= document.createElement('span');
	if(  nameObligatorio == null ||  nameObligatorio.length == 0 || /^\s+$/.test(nameObligatorio)){
		mensajeAlerta  = document.createTextNode('Debe ingresar su nombre');
		errorNombre.appendChild(mensajeAlerta);
		nameContainer.appendChild(errorNombre);
		return false;
		//primera letra mayuscula
	}else if(nameObligatorio.charAt(0)!== nameObligatorio.charAt(0).toUpperCase()){
		mensajeAlerta = document.createTextNode('La primera letra de tu nombre debe de ser mayuscula');
		errorNombre.appendChild(mensajeAlerta);
		nameContainer.appendChild(errorNombre);
		return false;
		// solo letras
	}else if (nameObligatorio.match(/[^a-zA-Z]+/g)){
		mensajeAlerta = document.createTextNode('Ingresa solo letras');
		errorNombre.appendChild(mensajeAlerta);
		nameContainer.appendChild(errorNombre);
		return false;
	}

	//valindando apellido
	var lastnameObligatorio = document.getElementById('lastname').value;
	var lastnameContainer = document.querySelector('.lastname-container');
	var errorLastName = document.createElement('span');
	if(lastnameObligatorio == null ||  lastnameObligatorio.length == 0 || /^\s+$/.test(lastnameObligatorio)){
		mensajeAlerta = document.createTextNode('Campo obligatorio, por favor ingresa tu  apellido');
		errorLastName.appendChild(mensajeAlerta);
		lastnameContainer.appendChild(errorLastName);
		return false;
		//primera letra mayuscula
	}else if(lastnameObligatorio.charAt(0)!== lastnameObligatorio.charAt(0).toUpperCase()){
		mensajeAlerta = document.createTextNode('La primera letra de tu apellido debe de ser mayuscula');
		errorLastName.appendChild(mensajeAlerta);
		lastnameContainer.appendChild(errorLastName);
		return false;
		// solo letras
	}else if (lastnameObligatorio.match(/[^a-zA-Z]+/g)){
		mensajeAlerta = document.createTextNode('Ingresa solo letras');
		errorLastName.appendChild(mensajeAlerta);
		lastnameContainer.appendChild(errorLastName);
		return false;
	}
	//validando correo
	var correo = document.getElementById("input-email").value;
	var correoContainer = document.querySelector('.email-container');
	var errorCorreo = document.createElement('span');
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(  correo == null ||  correo.length == 0 || /^\s+$/.test(correo)){
		mensajeAlerta = document.createTextNode('Campo obligatorio, por favor ingresa tu correo');
		errorCorreo.appendChild(mensajeAlerta);
		correoContainer.appendChild(errorCorreo);
		return false;
	}else if( !expr.test(correo)){
		mensajeAlerta = document.createTextNode('Ingresa correo con formato valido');
		errorCorreo.appendChild(mensajeAlerta);
		correoContainer.appendChild(errorCorreo);
		return false;
	}
	//validando contraseña
	var contraseña = document.getElementById('input-password').value;
	var contraseñaContainer = document.getElementById('input-password').parentNode;
	var errorContraseña = document.createElement('span');
	if(  contraseña == null ||  contraseña.length == 0 || /^\s+$/.test(contraseña)){
		mensajeAlerta = document.createTextNode('Campo obligatorio, por favor ingresa tu contraseña');
		errorContraseña.appendChild(mensajeAlerta);
		contraseñaContainer.appendChild( errorContraseña);
		return false;
	}else if(contraseña.length < 6){
		mensajeAlerta = document.createTextNode('Tu contraseña debe tener al menos 6 caracteres');
		errorContraseña.appendChild(mensajeAlerta);
		contraseñaContainer.appendChild( errorContraseña);
		return false;
	}else if(contraseña === "password"|| contraseña === "123456"|| contraseña === "098754"){
		mensajeAlerta = document.createTextNode('Tu contraseña no debe ser "password" o "123456" o  "098754"');
		errorContraseña.appendChild(mensajeAlerta);
		contraseñaContainer.appendChild( errorContraseña);
		return false;
	}

	//validando seleccion de bicicleta 
	var bici = document.getElementsByTagName('select')[0].value;
	var biciContainer = document.getElementsByTagName('select')[0].parentNode;
	var errorBici = document.createElement('span');
	if( bici == null || bici == 0 ) {
		mensajeAlerta = document.createTextNode('Por favor selecciona tu bicicleta');
		errorBici.appendChild(mensajeAlerta);
		biciContainer.appendChild(errorBici);
  		return false;
	}
	//validando informacion adicional
	var masInfo= document.querySelector(".checkbox span");
	if( !masInfo.checked ) {
		return false;
	}
}