$(function() { 
    var browser = ACMS.Dispatch.Utility.browser();
    if ( !browser.mobile ) {
        $('.js-perfectScrollbar').perfectScrollbar({
            wheelSpeed: 20,
            wheelPropagation: false
        });
    }
});