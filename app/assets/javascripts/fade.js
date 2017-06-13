$(function(){
  $(".fadeable").fadeIn(1500, function(){
    $(".next-quote").click(function(){
      $(".fadeable").fadeOut(1500, function(){
        location.href = "/"; 
      });
    });
  });
});

