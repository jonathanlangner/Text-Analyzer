const logContent = function(){
    console.log(textToParse);
    console.log(numberOfWords());
    console.log(numberCharacters());
}


// Word Count
//Inprogress.
const numberOfWords = function(){
    console.log(textToParse.length);
    let count = 0;
    let x = 0;
    for(let i = 0; i <= textToParse.length; ++i){
        if(textToParse.charCodeAt(i) === 32){
            ++count;
        }
    }
    return count;
}

// Number of Characters
const numberCharacters = function(){
  return textToParse.length;
}

// Number of Numerals
const numberNumerals = function(){

}

// Length of the String
const stringLength = function(){
    //Place Holder:
    console.log(textToParse.length);
}


const textToParse = document.querySelector("#to-parse").value;
const parseTextBtn = document.querySelector("#myBtn").addEventListener("click", logContent); 
console.log(textToParse);
