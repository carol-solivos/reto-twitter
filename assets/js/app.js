// llamando al boton para ejecutar la función newComment;

var boton = document.getElementById('btn');
boton.onclick = newComment;

//función que habilita el boton, guarda el comentario y lo muestra en un div nuevo;
function newComment(){	
	boton.disabled = true;
	var comentarios = document.getElementById('comentario').value;
	document.getElementById('comentario').value = '';

	/*if (comentarios.length == 0 || comentario == null) {
		alert('Ingresa un comentario');
		return false;
	}*/

	//obteniendo y creando nodos;
	var putComment = document.getElementById('putComment');
	var placeComment = document.createElement('div');
	var addComment = document.createElement('p');
	var placeText = document.createTextNode(comentarios);

	// agregando nodos hijos a nodos padres;
	addComment.appendChild(placeText);
	placeComment.appendChild(addComment);
	putComment.appendChild(placeComment);



}

// funcion contador con alertas de color
function textCounter(field, cnt, maxlimit) {       
	var cntfield = document.getElementById(cnt);
	cntfield.value = maxlimit - field.value.length;
	if (cntfield.value.length < 140){
		boton.disabled = false;
		cntfield.style.color = '#0DA5BC';
	}
	if (field.value.length >= 120 && field.value.length < 130 ) {
		cntfield.style.color = 'purple';
	}
	if (field.value.length >= 130) {
		cntfield.style.color = 'red';
	}
	if (field.value.length > 140) {
		boton.disabled = true;
		cntfield.style.color = 'red';
	}
	if (field.value.length == 0) {
		boton.disabled = true;
	}

		
};
