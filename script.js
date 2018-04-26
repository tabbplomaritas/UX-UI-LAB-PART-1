$("#menuButton").click(function(){
  showMenu();  
})



function showMenu() {
  $("#menuButton").html("Close Menu");
  $(".menuLinks").addClass("animated slideInDown");
  $(".menuLinks").css("display", "block");
  $("header").css("height", "33rem");
  $("nav").css("height", "18rem");
}