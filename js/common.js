$(document).ready(function() {

// MORE DETAILS
	$('.ipsum-button').on('click', function(event){
		event.preventDefault();
		var closest = $(this).siblings('.ipsum');
		if($(closest[0]).height() !== 118){
			$(closest).animate({ height: '118' }, 800);
		}else{
			$(closest).animate({ height: '343' }, 800)
		}
	});

// SLICK CAROUSEL
	$('.team-slider').slick({
		'appendArrows': $('.nav-arrows'),
		'nextArrow': '<button type="button" class="slick-next"><img src="images/icons/next-arrow.png"></button>',
		'prevArrow': '<button type="button" class="slick-prev"><img src="images/icons/prev-arrow.png"></button>'
	});


// MORPHING MENU
	$('.morphing-menu').on('click', function (event) {
		$(this).toggleClass('button-animation');
		$('.menu-holder').toggleClass('opened');
		event.stopPropagation();
	});
	$('body').on('click', function () {
		$('.morphing-menu').removeClass('button-animation');
		$('.menu-holder').removeClass('opened');
	});


// HIDDEN TEXT
	var elements = document.querySelectorAll('.ipsum');

	function setTitle(elements) {
		var tagValue = "";
		for (var i in elements) {
			if (elements.hasOwnProperty(i)) {
				tagValue = elements[i].innerHTML;
				elements[i].setAttribute('title', tagValue)
			}
		}
	}

	setTitle(elements);

// SMOOTH SCROLLING
	$(".menu-navigation, .morphing-menu, .arrow").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 700);
	});
});