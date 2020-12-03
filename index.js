let btnTranslate = document.querySelector('#btn-translate');
let inputText = document.querySelector('#txt-input');
let outputDiv = document.querySelector('.output');

const serverUrl = "https://api.funtranslations.com/translate/minion.json";

const getUrl =(text)=>{
    return serverUrl + "?" + "text=" + text
}

const errorHandler=(error)=>{
    alert('Server is down please try after some time !!')
}

const clickHandler=()=>{
    var textInput = inputText.value;
    fetch(getUrl(textInput))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
 btnTranslate.addEventListener('click',clickHandler);