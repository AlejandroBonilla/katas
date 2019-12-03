//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

// Given a string str, reverse it omitting all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// 
const isLetter = (str) =>{
  return str.length === 1 && str.match(/[a-z]/i)
}

const reverseWord = (word) =>{
  let arrWord = word.split('').reverse()
  return arrWord
}

const deleteNoLetter = (arr) =>{
  let arrLetters = []
  arr.forEach(element => {
     if(isLetter(element)){
       element
       arrLetters.push(element)
     }
  })  
  return arrLetters
}

const reverseLetter = (word)=>{
  let arrReverse = reverseWord(word)
  let notLetter = deleteNoLetter(arrReverse)
  let wordGood = ''
  notLetter.forEach(l=>{
    wordGood +=l 
  })
  return wordGood
}
console.log(reverseLetter('ultr53o?n'))
console.log(deleteNoLetter(['a','?','d','a']))