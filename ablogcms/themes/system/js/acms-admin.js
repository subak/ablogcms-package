ACMS.Ready(function(){
	$(function() {
	var browser = ACMS.Dispatch.Utility.browser();
	if ( !browser.mobile ) {
		$('.js-perfectScrollbar').perfectScrollbar({
			wheelSpeed: 20,
			wheelPropagation: false
		});
	}
	// スタイルガイド
	$('.js-navSubOpener').click(function(){
			$('.navSubGroup').toggleClass('acms-admin-block');
			return false;
		});

		function calcHeight() {
			var adminNav = $('.acms-navbar-admin').height() + 40;
			var height = $(window).height();
			var height = height - adminNav;
			var height = height + 'px';
			$('.navSubGroup').height(height);
		}

		calcHeight();

		$(window).resize(function(){
			calcHeight();
		});

	$('.js-sample-start').click(function(){
		$(this).parent().parent().toggleClass('active');
	});
});
});
