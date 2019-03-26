//http://api.icndb.com/jokes/random

let url = "https://api.icndb.com/jokes/random";

function getJokes() {
  confirm("\"You are willingy exposing yourself to possible attack and injury by reading about such an entity, do you understand?\"")
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })

    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      alert("Something went wrong: " + err);
    })
    
}

function displayResults(inval){

  $("#replaceMe").html(inval.value.joke);
}

function openFacebook() {
window.location.href = "https://www.facebook.com/officialchucknorrispage/";
}

function openReddit() {
  window.location.href = "https://www.reddit.com/r/ChuckNorris/";
}

function openTwitter() {
  window.location.href = "https://twitter.com/chucknorris?lang=en";
}

$(document).click(function()
{

    $("#norrisFacts").attr("style", "background-image: url('https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg')");

});