var Typo = require("typo-js");
var dictionary = new Typo("en_US");

const userText = document.getElementById('userText');
userText.addEventListener('input', () => {
    var currentValue = userText.value;
    var arr = currentValue.split(" ");
    if(currentValue.length != 0)
    {
        if(currentValue.charAt(currentValue.length - 1) == " ")
        {
            var word = arr[arr.length-2];
            var change = word;
            var buffer = " ";
            if(word.charAt(word.length-1) == ".")
            {
                change.splice(-1);
                buffer = ". ";
            }
            if(dictionary.suggest(word).length != 0)
            {
                change = dictionary.suggest(change)[0];
                var newValue = currentValue.replace(word+buffer, '')
                
                userText.value = newValue + change + buffer;
            }
        }
    }
});