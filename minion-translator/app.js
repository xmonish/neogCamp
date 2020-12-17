var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
} 

function errorHandler(){
    console.log("Error occured", error)
    alert("Something wrong in server. Try again after some time.")
}


function clickHandler(){
    var inputText = txtInput.value //taking input

    //processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText  //output
        })

        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

