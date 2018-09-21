var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var quote = document.querySelector("#quote");

var axiosBtn = document.querySelector("#axios");

//BASIC AXIOS VERSION
// axiosBtn.addEventListener("click", function(){
//   axios.get(url)
//   .then(function(res){
//     console.log(res.data[0]);
//     quote.innerHTML = res.data[0];
//   })
//   .catch(function(){
//     console.log("ERR");
//   })
// });

//AXIOS WITH ERROR HANDLERS
axiosBtn.addEventListener("click", sendRequest);

function sendRequest(){
  axios.get(url)
  .then(addComment)
  .catch(handleErrors)
 }

function addComment(res){
  quote.innerHTML = res.data[0];
}

function handleErrors(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  }
