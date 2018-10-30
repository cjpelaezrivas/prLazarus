var pages = [
	'md_2012_09_29.html', 'md_2012_09_29_B.html', 'md_2012_10_07.html',  'md_2012_10_07_B.html',  'md_2012_10_14.html',
	'md_2013_03_15.html', 'md_2013_06_13.html',
	'md_2014_05_02.html', 'md_2014_06_10.html', 'md_2014_08_07.html', 'md_2014_10_01.html',
	'md_2015_01_12.html', 'md_2015_08_10.html', 'md_2015_08_17.html', 'md_2015_08_24.html',
	'md_2016_09_22.html',
	'md_2018_03_21.html', 'md_2018_05_04.html', 'md_2018_10_30.html'
];

var split = new URL(window.location.href).pathname.split('/');
var page = split[split.length - 1]

var index = pages.indexOf(page);

if(index > -1) {
	if(index > 0) {
		var button = $("#navigationLeft");
		button.removeClass("navigateButtonInvisible");
		button.attr("href", pages[index - 1]);
	}

	if(index < pages.length - 1) {
		var button = $("#navigationRight");
		button.removeClass("navigateButtonInvisible");
		button.attr("href", pages[index + 1]);
	}
}
