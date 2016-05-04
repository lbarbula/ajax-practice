$(document).ready(function(){
  $.get("http://www.omdbapi.com/?t=rambo", function(data) {
    var result = data.Actors;
    var awards = data.Awards;
    var countries = data.Country;
    console.log(data)
$("div").append(result);
$("p").append(awards);
$("div").append("<h1>" + countries + "</h1>")
});

})
