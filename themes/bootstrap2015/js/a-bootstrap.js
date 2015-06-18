ACMS.Ready(function() {
	// 現在いるページのとき、ナビゲーションにBootstrapのactiveのクラスが適用されるように設定を変更
	ACMS.Config.linkMatchLocationClass = 'active';
	ACMS.Config.linkMatchLocationFullClass = 'active';
	ACMS.Config.linkMatchLocationBlogClass = 'active';
	ACMS.Config.linkMatchLocationCategoryClass = 'active';
	ACMS.Config.linkMatchLocationEntryClass = 'active';
});

$(function() {
	//トップのアニメーション実行
	$('.js-animation').waypoint(function() {
		$(this).addClass('active');
		var offsetTop = $(this).offset().top;
	}, {
			offset: '60%'
	});

	// カルーセル
	$('.carousel-inner .item:first-child').addClass('active');
	$('.carousel-indicators li:first-child').addClass('active');

	// アコーディオン
	$('.panel:first-child .collapse').addClass('in');

	// タブ
	$('.nav-tabs li:first-child').addClass('active');
	$('.tab-content .tab-pane:first-child').addClass('active');

	// Affix
	$('.js-affix').affix({
		offset: {
			top: 600
			//ナビゲーション+カルーセルの高さ
		}
	});

	//Scroll Spy
	$('body').scrollspy({ target: '.navbar-example' });


});
