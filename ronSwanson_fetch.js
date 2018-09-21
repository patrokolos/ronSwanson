var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");
var fetchBtn = document.querySelector("#fetch");

fetchBtn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateQuote)
  .catch(printError)
});

function handleErrors (response){
  if(!response.ok) {
    throw Error(response.status);
  }
  return response;
  //could also use res for everything instead of response, or anything really.
}

function parseJSON (response) {
  return response.json().then(function(parsedData){
    //Could use this .then to console.log the parsed response
    //add this to make the value assignment on the updateQuote function shorter.
    // console.log(parsedData[0]);
    return parsedData[0];
  });
}

function updateQuote (data){
quote.innerHTML = data;

}

function printError(error){
  console.log(error);
}
