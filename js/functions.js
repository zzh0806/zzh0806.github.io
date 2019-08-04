jQuery(function($) {
	'use strict';
	/*
		Dropdown Menu
	*/
	var dropdownMenu = function() {
		$('#sidebar nav ul .dropdown > span').on('click', function() {
			var $parent = $(this).parent();
			if (!$parent.hasClass('expanded')) {
				$('#sidebar nav ul .dropdown').removeClass('expanded');
				$('#sidebar nav ul .dropdown > ul').slideUp(300);
				$parent.find('> ul').slideDown(300);
				$parent.addClass('expanded');
			} else {
				$parent.removeClass('expanded');
				$parent.find('> ul').slideUp(300);
			}
		});
	}

	/*
		Project Carousel
	*/
	var projectCarousel = function() {
		$('#project-page #project-carousel').carousel();
	}

	/*
		Project Gallery
	*/
	var projectGallery = function() {
		$('#project-page .gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: 'mfp-with-zoom mfp-img-mobile',
			image: {
				verticalFit: true
			},
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(element) {
					return element.find('img');
				}
			}
		});
	}


	/*
		Animsition
	*/
	var animsition = function() {
		$('.global-outer').animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 400,
			outDuration: 400,
			linkElement: '.smooth-leave',
			loading: true,
			loadingParentElement: 'body',
			loadingClass: 'animsition-loading',
			loadingInner: '',
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [
				'animation-duration',
				'-webkit-animation-duration'
			],
			overlay : false,
			overlayClass : 'animsition-overlay-slide',
			overlayParentElement : 'body',
			transition: function(url) {
				window.location.href = url;
			}
		});
	}

	/*
		Isotope
	*/
	var isotope = function() {
		var $grid = $('#works-grid');
		var $filter = $('#works-filter');

		$grid.imagesLoaded(function() {
			$grid.isotope({
				itemSelector: '.works-item',
				masonry: {
					gutter: '.gutter'
				}
			});
		});

		$filter.find('ul li').on('click', function() {
			$filter.find('ul li a').removeClass('current');
			$(this).find('a').addClass('current');
			var category = $(this).attr('data-filter');
			$grid.isotope({
				filter: category
			});
			return true;
		});

		$('.picture').on('click', function() {
			var json = $(this).data('json');
			var url = json+"?time="+new Date();
			$.getJSON(url, function (value) {
			
				$('#year').html(value.year);
				$('#myModalLabel').html(value.name);
				$('#date').html(value.date);
				$('#place').html(value.place);
				$('#type').html(value.type);
				$('#spaceDesigner').html(value.spaceDesigner);
				$('#flatDesigner').html(value.flatDesigner);
				$('#customer').html(value.customer);
				$('#photographer').html(value.photographer);
				var $pictures = $('#pictures');
				$pictures.empty();
				$.each(value.pictures,function(n1,picture) { 
					var item = $('<div class="picture" ><img src="'+picture+'" alt="" style="width: 100% !important;padding-bottom: 15px;"></div>');
					$pictures.append(item);
				})
				
		});
		})
	}



	var initData = function(){
		var $grid = $('#works-grid');
		var $pictures = $('#pictures');
		var url = "./data.json?time="+new Date();
		$.getJSON(url, function (data) {
			$.each(data,function(n,value) { 
				var item = $('<a class="works-item '+value.type+'" href="javascript:void(0);" >'+
						'<div class="picture" data-json='+value.dataJson+' data-toggle="modal" data-target="#myModal" >'+
							'<div class="content">'+
								'<div class="text">'+
									'<h2>'+value.name+'</h2>'+
								'</div>'+
							'</div>'+
							'<img src="'+value.cover+'" alt="">'+
						'</div>'+
					'</a>');
				$grid.append(item);
			 });
		});
		
	} 

	$(window).on('load', isotope);

	$(document).ready(function() {
		dropdownMenu();
		animsition();
		initData();
		// showProject();
	});
});