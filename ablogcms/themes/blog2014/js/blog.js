$(function(){
	var agent = navigator.userAgent;
	if (-1 !== agent.indexOf('iPhone') || -1 !== agent.indexOf('Android')) {
		$('#globalNavi span').addClass('globalNaviToggle');
	}
	
	$('.globalNaviToggle').click(function() {
		$("#globalNavi ul").slideToggle();
	});
});