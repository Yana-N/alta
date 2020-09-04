document.addEventListener('DOMContentLoaded', function () {

	// menu toggler
	const toggler = document.querySelector('.navbar__toggler')
	const menu = document.querySelector('.navbar__block')

	const toggling = () => {
		menu.classList.toggle('active')
		toggler.classList.toggle('opened')
	}

	toggler.addEventListener('click', (e) => {
		toggling()
	})
	// end menu toggler

	// front-page slider
	$('.slider').slick({
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="https://altafond.com/wp-content/themes/altafond/assets/images/dest/prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="https://altafond.com/wp-content/themes/altafond/assets/images/dest/next.svg" alt=""></button>',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 20000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: false,
				}
			},
		]
	})
	// end front-page slider

//fancybox for documents block
	$('[data-fancybox="docs"]').fancybox({
		loop: true,
		buttons: [
			'zoom',
			'slideShow',
			'fullScreen',
			'download',
			'close',
		],
	})
	//end fancybox for documents block

	//fancybox for profile documents
	$('[data-fancybox="profile"]').fancybox({
		loop: true,
		buttons: [
			'zoom',
			'slideShow',
			'fullScreen',
			'download',
			'close',
		],
	})
	//end fancybox for profile documents
})