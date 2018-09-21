var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");

// CHECK TO SEE IF EVERYTHING WORKS
// xhrBtn.addEventListener("click", function(){
//   alert("Clicked!");
// });

//listen for click
xhrBtn.addEventListener("click", function(){

  //make the request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      // console.log(XHR.responseText);
      //responseText returns a string, which we need to parse
      var data = JSON.parse(XHR.responseText);
      // console.log(data[0]);
      quote.innerHTML = data[0];
    }
  }

  XHR.open("GET", url);
  XHR.send();
});
