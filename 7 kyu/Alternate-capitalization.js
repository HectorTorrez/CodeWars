/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try: */

function capitalize(s){
  
    let first = []
    let second = []
    for(let i = 0; i<s.length; i++){
      if(i % 2 === 0){
        first.push(s[i].toUpperCase())
        second.push(s[i])
      }else{
        first.push(s[i])
        second.push(s[i].toUpperCase())
      }
    }
    let newFirst = first.join('')
    let newSecond = second.join('')
  
    return [`${newFirst}`, `${newSecond}`]
    
  };