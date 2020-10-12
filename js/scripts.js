console.log("file loaded")
$(document).ready(function() {
  $("#colorChange").click(function() {
    console.log("it works");
    $("body").css({backgroundColor: "red"});
  });
});