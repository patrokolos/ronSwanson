
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

$("#jquery").click(function(){
  $.getJSON(url)
  // .done(function(data){
  //   console.log(data);
  // })
  .done(addQuote)
  .fail(function(){
    alert("ERROR!");
  })
});

function addQuote (data){
  $("#quote").text(data[0]);
}
