/*  submenue................................. */
$("#header-nav-ul1-div2").on("click",function(){
    $("#header-ul2").slideToggle();
});
/*  submenue................................. */
/* accordion ....................................*/
$('.toggle').on("click",function(){
    $(this).find(".togglecontainer").toggleClass("active");
    (this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
/* accordion ....................................*/
/*  search section ................................*/
$(".searchButton").on("click", function(){
  $(".searchButton").toggleClass("active");
  if ($(".searchButton").hasClass("active")) {
    $(".searchBar").css("height", "100vh");
    $(".searchBar").css("width", "100%");
    $(".searchBar").css("border-radius", "0px");
    $("#searchForm").css("opacity","1");
    $(".searchIcon").removeClass("fa-search").addClass("fa-times");
  }
  else {
    $(".searchBar").css('height', "0vh");
    $(".searchBar").css("width", "32px");
    $(".searchBar").css("border-radius", "4px");
    $("#searchForm").css("opacity","0");
    $(".searchIcon").removeClass("fa-times").addClass("fa-search");
  }
});
/*  search section ................................*/