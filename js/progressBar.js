function calculateProgressBarWidth() {
	var winTop = $(window).scrollTop();
	var winHeight = $(window).height();
	var docHeight = $('.main-container').height();
	var totalScroll = (winTop / (docHeight - winHeight)) * 100;

	$(".progressBar").css("width", totalScroll + "%");
}

$(document).ready(() => $(window).scroll(calculateProgressBarWidth));
