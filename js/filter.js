function filterByTitle(title) {
	if(title) {
		filter(title.toUpperCase(), 'title');
	}
}

function filterByParameters() {
	filterByTitleParameter();
	filterByTagParameter();
}

function filterByTitleParameter() {
	var search = getParameter("title");

	if(search) {
		filter(search.toUpperCase(), 'title');
	}
}

function filterByTagParameter() {
	var search = getParameter("tag");

	if(search) {
		filter(search.toUpperCase(), 'tags');
	}
}

function filter(search, c) {
	var entries = $(".entry");
	for (var i = 0; i < entries.length; i++) {
		var tags = $(entries[i]).find('.' + c);

		if(!tags.html() || !tags.html().toUpperCase().includes(search)) {
			entries[i].style.display = 'none';
		}
	}
}

function removeFilter() {
	var entries = $(".entry");
	for (var i = 0; i < entries.length; i++) {
		entries[i].style.display = 'initial';
	}
}

function getParameter(parameter) {
	var url = new URL(window.location.href);
	var search = url.searchParams.get(parameter);

	return search;
}
