$.ajaxSetup({beforeSend: function(xhr){
    if (xhr.overrideMimeType)
    {
      xhr.overrideMimeType("application/json");
    }
  }
  });
  
  $(document).ready(function(){
      $(".button").click(function(){
          var input = $(".secret").val();
          $.getJSON("key.json", function(keyjson) {
              if(input in keyjson)
              {
                  $.getJSON("/secret_json/"+input+".json", function(json) {
                      $(".news-body").html("<font color=red>Secret news: </font>" + json["news_title"]);
                  });
              }
              else
              {
                  $(".news-body").html("Wrong secret key!");
                  
              }
          });
      });
  });
  