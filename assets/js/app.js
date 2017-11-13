// llamando al boton para ejecutar la función newComment;

var boton = document.getElementById('btn');
boton.onclick = newComment;


//función que habilita el boton, guarda el comentario y lo muestra en un div nuevo;
function newComment(){	
	boton.disabled = true;
	var comentarios = document.getElementById('comentario').value;
	document.getElementById('comentario').value = '';
	var counting = document.getElementById('contando');
	counting.innerHTML = 140;
	counting.style.color = '#0DA5BC';

	//obteniendo y creando nodos;
	var putComment = document.getElementById('putComment');
	var placeComment = document.createElement('div');
	var addComment = document.createElement('p');
	var placeText = document.createTextNode(comentarios);

	// agregando nodos hijos a nodos padres;
	addComment.appendChild(placeText);
	placeComment.appendChild(addComment);
	putComment.appendChild(placeComment);
};

// funcion contador con alertas de color

var comment = document.getElementById('comentario');
	comment.onkeyup = counter;

function counter(){

	var counting = document.getElementById('contando');
	var comentarios = document.getElementById('comentario').value;
	var commentLength = comentarios.length;

	counting.innerHTML = 140 - commentLength;

	comment.style.height = (commentLength + 80) +"px";
	
	if (comentarios.length < 140){
		boton.disabled = false;
		counting.style.color = '#0DA5BC';
	}
	if (comentarios.length >= 120 && comentarios.length < 130 ) {
		counting.style.color = 'purple';
	}
	if (comentarios.length >= 130) {
		counting.style.color = 'red';
	}
	if (comentarios.length > 140) {
		boton.disabled = true;
		counting.style.color = 'red';
	}
	if (comentarios.length == 0) {
		boton.disabled = true;
	}

};
