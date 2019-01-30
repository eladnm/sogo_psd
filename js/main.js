var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $( ".sd-main" ).addClass( "scroll-bottom").removeClass("scroll-top");
        $( ".sd-header" ).addClass( "scroll-bottom").removeClass("scroll-top");
    } else {
        $( ".sd-main" ).addClass("scroll-top").removeClass("scroll-bottom");
        $( ".sd-header" ).addClass("scroll-top").removeClass("scroll-bottom");
    }
    lastScrollTop = st;
});