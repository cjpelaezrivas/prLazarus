function calculateProgressBarWidth() {
	var wintop = $(window).scrollTop();
	var winheight = $(window).height();
	var docheight = $('.main-container').height();
	var totalScroll = (wintop / (docheight - winheight)) * 100;

	$(".progressBar").css("width", totalScroll + "%");
}

$( document ).ready(() => $(window).scroll(calculateProgressBarWidth));


calculateProgressBarWidth();
