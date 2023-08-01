/* Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) */


var summation = function (num) {
    // Code here
    let data = []
    let sum = 0;
    for(let i = 1; i <= num; i++){
      data.push(i)
    }
  
    for(let j = 1; j <= data.length; j++){
      sum += j
    }
    
  return sum
  }