$(function () {
	var nav     = $('.pageTopBtn'),
		offset  = '50',
		footer  = $(document).height() - $(window).height() - 500;
	$(window).scroll(function() {
		if($(window).scrollTop() > offset) {
			nav.addClass('pageTopBtnAppear');
			nav.css({
				'filter':'progid:DXImageTransform.Microsoft.AlphaImageLoader( sizingMethod="scale");'
			}); // IE8対応
		} else {
			nav.removeClass('pageTopBtnAppear');
		}
	});
});
