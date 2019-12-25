$( document ).ready(function() {
    if (window.innerWidth > 1100) {
        $('.dropdown').hover(function() {
            $('#overlay').css('background-color', 'rgba(0,0,0, 0.5)');
          }, function() {
            // on mouseout, reset the background colour
            $('#overlay').css('background-color', 'rgba(0,0,0,0)');
          });
    }

    
    if (window.innerWidth > 500) {
        $('#menu').css("background-color", "rgba(0,0,0,0)");
        $(".header-text").css("color", '#fff');
        $(".whiteBg").css("backgroundColor", 'rgba(0,0,0,0)');
    } else{
        //$('#menu').css("background-color", "rgba(255,255,255,1)");
        $(".header-text").css("color", '#000');
        $(".whiteBg").css("backgroundColor", 'rgba(255,255,255,1)');
    }
});

 $(window).resize(function() {
    if(window.innerWidth < 1100 && $(window).scrollTop() > 50){
        $(".whiteBg").css("backgroundColor", 'rgba(255,255,255,1)');
    } else{
        $(".whiteBg").css("backgroundColor", 'rgba(0,0,0,0');
    }
    if (window.innerWidth > 500 && $(window).scrollTop() < 50) {
        $('#menu').css("background-color", "rgba(0,0,0,0)");
        $(".header-text").css("color", '#fff');
        //$(".whiteBg").css("backgroundColor", 'rgba(0,0,0,0)');
    } else{
        //$('#menu').css("background-color", "rgba(255,255,255,1)");
        $(".header-text").css("color", '#000');
        $(".whiteBg").css("backgroundColor", 'rgba(255,255,255,1)');
    }
});

const scrollHeaderHandler = () => {
    if($(window).scrollTop() > 50){
        $(".header-panel-bg").css("opacity", "1");
        if (window.innerWidth > 500) {
            $(".header-text").css("color", '#000');
            if (window.innerWidth < 1100) {
                $(".whiteBg").css("backgroundColor", '#fff');
                //$(".dropdown-content").css("backgroundColor", 'rgba(0,0,0,0)');
            } else{
                $(".dropdown-content").css("backgroundColor", '#fff');
            }

        }
        $('.ham-li').css("backgroundColor", '#000');
    } else
    {
        if (window.innerWidth > 500) {
            $(".header-text").css("color", '#fff');
            $(".whiteBg").css("backgroundColor", 'rgba(0,0,0,0)');
            if (window.innerWidth < 1100) {
                $(".whiteBg").css("backgroundColor", 'rgba(0,0,0,0)');
                $(".dropdown-content").css("backgroundColor", 'rgba(0,0,0,0)');
            } else{
                $(".dropdown-content").css("backgroundColor", 'rgba(0,0,0,0)');
            }
            //$(".dropdown-content").css("backgroundColor", 'rgba(0,0,0,0)');
        }
        $(".header-panel-bg").css("opacity", "0");
        $('.ham-li').css("backgroundColor", '#fff');
    }
};

$(window).load(scrollHeaderHandler);

$(window).scroll(scrollHeaderHandler);
