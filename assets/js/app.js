var boton = document.getElementById('btn');
boton.onclick = newComment;

function newComment(){	
	var comentarios = document.getElementById('comentario').value;
	document.getElementById('comentario').value = '';

	/*if (comentarios.length == 0 || comentario == null) {
		alert('Ingresa un comentario');
		return false;
	}*/

	var putComment = document.getElementById('putComment');
	var placeComment = document.createElement('div');
	var addComment = document.createElement('p');
	var placeText = document.createTextNode(comentarios);

	addComment.appendChild(placeText);
	placeComment.appendChild(addComment);
	putComment.appendChild(placeComment);



}
