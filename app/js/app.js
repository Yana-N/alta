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
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
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