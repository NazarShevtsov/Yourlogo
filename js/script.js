$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('.header__burger').toggleClass('lock');
	});
	$('.fa-search').click(function(event){
		$('.search__input').toggleClass('block');
		$('.fa-search').toggleClass('move');
	});
});

new Swiper('.members-slider', {

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	
	slidesPerView: 3,
	loop: true,
	loopedSlides: 3,
	speed: 800,

	autoplay: {
		delay: 7000,
		disableOnInteraction: false
	},

	breakpoints:{
		320:{
			slidesPerView: 1,
		},
		768:{
			slidesPerView: 2,
		},
		1024:{
			slidesPerView: 3,
		},
	},
});