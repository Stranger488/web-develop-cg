function toggleHamburger(){
  var topBar = $(".hamburger li:nth-child(1)"),
    middleBar = $(".hamburger li:nth-child(2)"),
    bottomBar = $(".hamburger li:nth-child(3)");
    if (middleBar.hasClass("rot-45deg")) {
      topBar.removeClass("rot45deg");
      middleBar.removeClass("rot-45deg");
      bottomBar.removeClass("hidden");
    } else {
      bottomBar.addClass("hidden");
      topBar.addClass("rot45deg");
      middleBar.addClass("rot-45deg");
    }
  
}
$(document).ready(function() {
  //toggle menu
  $(".hamburger-container").click(function() {
    $("#menu").slideToggle();
  });

  //to fix issue that toggle adds style(hides) to nav
  $(window).resize(function() {
    if (window.innerWidth > 1024) {
      $("#menu").removeAttr("style");
    }
  });

  //icon animation
  
  $(".hamburger-container").on("click", function() {
    toggleHamburger();
  });
});

 $(window).resize(function() {
    var middleBar = $(".hamburger li:nth-child(2)");
    if (middleBar.hasClass("rot-45deg")){
        toggleHamburger();
        $("#menu").slideToggle();
    }
});