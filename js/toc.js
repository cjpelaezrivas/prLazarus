var title = 'Contenido'
try {
	if(tocTitle) {
		title = tocTitle;
	}
} catch(e) {
	// Do nothing
}

$("#TOC").prepend('<div class="title">' + title + '</div>');
