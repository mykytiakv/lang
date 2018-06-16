$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 100);

	changeWidth();
});

window.addEventListener("resize", changeWidth);

function changeWidth() {
	if (window.innerWidth <= 425) {
		document.getElementsByClassName('l-screen')[0].style.display = 'none';
		document.getElementsByClassName('r-screen')[0].style.display = 'none';
		document.getElementsByClassName('screen-list-parent')[0].style.width = '100%';
		document.getElementsByClassName('screen-list')[0].style.width = '100%';
	} else {
		document.getElementsByClassName('l-screen')[0].style.display = 'block';
		document.getElementsByClassName('r-screen')[0].style.display = 'block';
		document.getElementsByClassName('screen-list-parent')[0].style.width = '85%';
		document.getElementsByClassName('screen-list')[0].style.width = '85%';
	}
}
new WOW().init();
window.onscroll = function() { 
	var header = document.getElementsByTagName('header')[0];
	var sticky = 50;

	(window.pageYOffset >= sticky) 
		? header.classList.add("fixed") : header.classList.remove("fixed");
};
