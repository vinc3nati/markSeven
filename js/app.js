var translate = document.querySelector(".btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/groot.json";

function genreateURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickHandler() {
  const inputText = txtInput.value;

  fetch(genreateURL(inputText))
    .then((res) => res.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch((error) => {
      console.log("Something went wrong " + error);
      alert("Somethin went wrong, Try again !");
    });
}

translate.addEventListener("click", clickHandler);
