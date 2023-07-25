const logContent = function(){
    console.log(textToParse.value);
}

// Word Count
const numberOfWords = function(){
    
}

// Number of Characters
const numberCharacters = function(){
  
}

// Number of Numerals
const numberNumerals = function(){

}

// Length of the String
const stringLength = function(){
    //Place Holder:
    console.log(textToParse.length);
}


const textToParse = document.querySelector("#to-parse");
const parseTextBtn = document.querySelector("#myBtn").addEventListener("click", logContent); 
console.log(textToParse);
