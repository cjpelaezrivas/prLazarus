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
	var someVisible = false;

	var years = $('.year');
	for(var i = 0; i < years.length; i++) {

		var yearVisible = false;

		var entries = $(years[i]).find('.entry')
		for (var j = 0; j < entries.length; j++) {

			var tags = $(entries[j]).find('.' + c);

			if(tags.html() && tags.html().toUpperCase().includes(search)) {
				yearVisible = true;
			} else {
				entries[j].style.display = 'none';
			}
		}

		if(yearVisible) {
			someVisible = true;
		} else {
			years[i].style.display = 'none';
		}
	}

	if(!someVisible) {
		$('.noResult')[0].style.display = 'block';
	}
}

// function filter(search, c) {
// 	var entries = $(".entry");
// 	for (var i = 0; i < entries.length; i++) {
// 		var tags = $(entries[i]).find('.' + c);

// 		if(!tags.html() || !tags.html().toUpperCase().includes(search)) {
// 			entries[i].style.display = 'none';
// 		}
// 	}
// }

function removeFilter() {
	var years = $(".year");
	for (var i = 0; i < years.length; i++) {
		years[i].style.display = 'initial';
	}

	var entries = $(".entry");
	for (var i = 0; i < entries.length; i++) {
		entries[i].style.display = 'initial';
	}

	$('.noResult')[0].style.display = 'none';
}

function getParameter(parameter) {
	var url = new URL(window.location.href);
	var search = url.searchParams.get(parameter);

	return search;
}
