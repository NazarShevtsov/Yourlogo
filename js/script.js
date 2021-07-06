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