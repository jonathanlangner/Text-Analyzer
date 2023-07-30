const SEARCH_BTN = document.querySelector("#search-btn").addEventListener("click", simpleSearch);
let textSEARCH = document.querySelector("#search-box").value;
let textToParse = document.querySelector("#to-parse").value;
const parseTextBtn = document.querySelector("#myBtn").addEventListener("click", logContent); 



const logContent = function(){
    textToParse = document.querySelector("#to-parse").value;
    console.log(textToParse);
    console.log(numberOfWords());
    console.log(numberCharacters());
    console.log(numberNumerals());
}


//? Search Functions

const simpleSearch = function(){
    textSEARCH = document.querySelector("#search-box").value;
    console.log(textSEARCH);
    console.log(textToParse.search(textSEARCH));
    // return textToParse.search(SEARCH);
}

//? General Statistics: 

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
    let count = 0;
    for(let i = 0; i <= textToParse.length; ++i){
       switch(textToParse.charAt(i)){
        case "0":
            ++count;
            break;
        case "1":
            ++count;
            break;
        case "2":
            ++count;
            break;
        case "3":
            ++count;
            break;
        case "4":
            ++count;
            break;
        case "5":
            ++count;
            break;
        case "6":
            ++count;
            break;
        case "7":
            ++count;
            break;
        case "8":
            ++count;
            break;
        case "9":
            ++count;
            break;                     
       }
    }
    return count;
}

// Length of the String
const stringLength = function(){
    //Place Holder:
    console.log(textToParse.length);
}


//? Readability Analysis
const readability = function(){
    
}
  


//?Frequency Analysis
const frequencyAnalysis = function(){

}



//? Morse Code
const morseEncode = function(){
    
}
  

const morseDecode = function(){
    
}



//? Caesar Cipher
const caesarEncode = function(){
    
}


const caesarDecode = function(){
    
}

