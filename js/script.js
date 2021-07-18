'use strict'

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

	preloadImages: false,

	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,

});


//lazy loading
const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if(lazyImages.length>0){
	lazyImages.forEach(img => {
		if(img.dataset.src || img.dataset.srcset){
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll(){
	if(document.querySelectorAll('img[data-src], source[data-srcset]').length > 0){
		lazyScrollCheck();
	}
}

function lazyScrollCheck(){
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if(imgIndex >= 0){
		if(lazyImages[imgIndex].dataset.src){
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if(lazyImages[imgIndex].dataset.srcset){
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPositions[imgIndex];
	}
}

