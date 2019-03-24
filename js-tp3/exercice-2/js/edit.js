
window.onload = function() {

	// pour stocker l'élément en cours d'édition
	let editable = null;

	// ici, on fabrique l'éditeur et tous ses composants

	// l'élément principal
	let editor = document.createElement("div");
	// le 'textarea' dans lequel on place le contenu
	// de l'élément à éditer
	let textarea = document.createElement("textarea");
	// un paragraphe pour regrouper des éléments
	let paragraph = document.createElement("p");
	// le bouton 'save'
	let saveButton = document.createElement("input");
	saveButton.type = "button";
	saveButton.value = "save";
	// le bouton 'cancel'
	let cancelButton = document.createElement("input");
	cancelButton.type = "button";
	cancelButton.value = "cancel";
	// ici, on emboîte les éléments les uns dans les autres
	paragraph.appendChild(textarea);
	editor.appendChild(paragraph);
	editor.appendChild(saveButton);
	editor.appendChild(cancelButton);
	// on ajoute l'attribut 'id' à l'éditeur
	editor.setAttribute("id", "editor");
	// on ajoute l'éditeur comme dernier fils du 'body'
	document.querySelector("body").appendChild(editor);
	// on cache l'éditeur
	editor.style.visibility = "hidden";

	// la fonction liée à l'évènement 'onclick' sur
	// le bouton 'save' de l'éditeur doit :
	//   * placer le (nouveau) contenu du 'textarea'
	//     comme (nouveau) contenu de l'élément à éditer
	//   * effectue un requête AJAX au script 'edit.php' avec
	//     comme paramètres 'id' l'id de l'élément à éditer et
	//     comme paramètre 'content' le nouveau contenu

	

	saveButton.onclick = function() {
		editable.innerHTML = textarea.value;
		let id = editable.getAttribute("data-id");
		let content  = encodeURI(textarea.value);
		
		new simpleAjax("edit.php","post","id="+id+"&content="+content);

		
	};

	// la fonction liée à l'évènement 'onclick' sur
	// le bouton 'cancel' de l'éditeur doit :
	//   * supprimer le contenu du 'textarea'
	//   * cacher l'éditeur
	cancelButton.onclick = function() {
		editable = null;
		textarea.value = "";
		editor.style.visibility = "hidden";
		
	};

	// cette fonction est appelée lors
	// d'un clic sur un élément éditable.
	// Lorsqu'elle appelée, elle doit :
	//   * stocker l'élément à éditer dans la varianle 'editable'
	//   * copier le contenu de l'élément dans le 'textarea'
	//   * faire apparaître l'éditeur
	function openEditor() {
		editable = this;
		textarea.value = this.innerHTML.trim();
		editor.style.visibility = "visible";
		
		
	}

	// ici, il faut ajouter l'évènement 'onclick' sur tous les éléments de
	// classe 'editable' et lier à cet évènement la fonction 'openEditor'
	let editable_items = document.getElementsByClassName("editable");
	for(let i = 0;i<editable_items.length;i++){
		editable_items[i].onclick = openEditor;
	}

	
};
