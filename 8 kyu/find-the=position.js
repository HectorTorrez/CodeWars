/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1" */


function position(letter){
    //Write your own Code!
     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
     
     let find = alphabet.indexOf(letter) + 1
      
      return `Position of alphabet: ${find.toString()}`
    }