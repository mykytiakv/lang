$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 100);
	
});

new WOW().init();
window.onscroll = function() { 
	var header = document.getElementsByTagName('header')[0];
	var sticky = 50;

	(window.pageYOffset >= sticky) 
		? header.classList.add("fixed") : header.classList.remove("fixed");
};