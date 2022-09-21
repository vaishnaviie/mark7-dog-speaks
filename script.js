
 
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output");

var serverUrl= "https://api.funtranslations.com/translate/doge.json"

function getTranslationURL(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something is wrong with server! Try Again after some time.");
}

function ClickEventHandler() {
    {
        var inputText=txtInput.value;

        fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json=>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
            })
        .catch(errorHandler)
    };
}

btnTranslate.addEventListener("click", ClickEventHandler );