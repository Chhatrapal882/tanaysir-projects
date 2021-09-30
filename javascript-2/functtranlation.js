// console.log('external js')
// alert('this is working')
// var a = prompt('what is your name')
// console.log('aaaaaaaaaaaaa',a)

var input = document.getElementById('input')
var output = document.getElementById('output')

var serverurl = "https://api.funtranslations.com/translate/pig-latin.json?"

const getTranslationUrl = (inputtext) => {
    return serverurl + "?" + "text=" + inputtext
}

const clickHandler = () => {
    var inputtext = input.value
    console.log(inputtext)

    fetch(getTranslationUrl(inputtext))
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated
        })

}
document.querySelector('#translate').addEventListener('click', clickHandler)