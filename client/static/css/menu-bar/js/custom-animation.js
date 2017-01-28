$(document).ready(function(){
		      $("html").height(function() {
		            if($(this).height() < 755) {
		                 $($(this)).addClass("my-height");
						}
							});		
					});	
		$('nav.gn-menu-wrapper ul li a.gn-icon').hover(function(){
			$('.gn-menu-main > li > a.gn-icon-menu').addClass('menu-btn-animation');
			$('.gn-menu-main').addClass('menu-btn-main-animation');
			$('.server-name').addClass('server-name-animation');
		});
		$('.gn-menu-main a.gn-icon-menu').click(function(){
			$('.gn-menu-main > li > a.gn-icon-menu').toggleClass('menu-btn-animation');
			$('.gn-menu-main').toggleClass('menu-btn-main-animation');
			$('.server-name').toggleClass('server-name-animation');
		});
		$('body').click(function(){
			$('.gn-menu-main > li > a.gn-icon-menu').removeClass('menu-btn-animation');
			$('.gn-menu-main').removeClass('menu-btn-main-animation');
			$('.server-name').removeClass('server-name-animation');
		});