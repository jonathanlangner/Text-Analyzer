//? Search Functions

const simpleSearch = function(){
    textSEARCH = document.querySelector("#search-box").value;
    console.log(textSEARCH);
    console.log(textToParse.search(textSEARCH));
    // return textToParse.search(SEARCH);
}


const SEARCH_BTN = document.querySelector("#search-btn").addEventListener("click", simpleSearch);
let textSEARCH = document.querySelector("#search-box").value;
let textToParse = document.querySelector("#to-parse").value;
// const parseTextBtn = document.querySelector("#myBtn").addEventListener("click", logContent); 

const logContent = function(){
    textToParse = document.querySelector("#to-parse").value;
    console.log(textToParse);
    console.log(numberOfWords());
    console.log(numberCharacters());
    console.log(numberNumerals());
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
  

let head; 
const linkedList =  function(d) {
    this.data = d;
    this.next = null;
    this.previous = null;
}

head = new linkedList(1);
let second = new linkedList(2);
let third = new linkedList(3);
let fourth = new linkedList(4);
let fifth = new linkedList(5);


head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

second.previous = head;
third.previous = second;
fourth.previous = third;
fifth.previous = fourth;

const printList = function(){
    let n = head;
    let listData = [];
    let i = 0;
    while(n !== null){
        listData[i] = n;
        n = n.next;
        ++i;
    }
    return listData;
}

const searchList = function(n) { 
    let s = head; // This search is linear from head to tail of the list.
    while(s.next !== null){
        if(s.data === n){
            return true;
        }
        s = s.next;
    }
    return false;
}




//?Frequency Analysis
const frequencyAnalysis = function(){
    // Top ten words within content 
    const wordFreq = {
        wordOne: {val: null, freq: null, exists: false},
        wordTwo: {val: null,  freq:  null, exists: false},
        wordThree: {val: null, freq: null, exists: false},
        wordFour: {val: null, freq: null, exists: false},
        wordFive: {val: null,  freq: null, exists: false},
        wordSix: {val: null, freq: null, exists: false},
        wordSeven: {val: null,  freq:  null, exists: false},
        wordEight: {val: null, freq: null, exists: false},
        wordNine: {val: null, freq: null, exists: false},
        wordTen: {val: null,  freq: null, exists: false},
    };
    const charFreq = {

    }; 

    for(let i = 0; i <= textToParse.length; ++i){
        
        if(textToParse.charAt(i) !== searchList(textToParse.charAt(i))){
            //Add new character to linked list. 
        }
        // Otherwise increment value of that character by one.
        
    }
}



//? Morse Code
const morseEncode = function(){
    
}
  

const morseDecode = function(){
    
}



//? Caesar Cipher
let caesarShift = document.querySelector("#caesar-shift").value;

const caesarEncode = function(){


}

const CAESARENCODE = document.querySelector("#caesar-encode").addEventListener("click", caesarEncode);
const caesarDecode = function(){
    
}
