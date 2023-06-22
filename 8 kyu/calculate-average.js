/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
    // your code here
  const initialValue = 0
  const sumWithInitial = array.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue)
   
  return sumWithInitial / array.length || 0
    
  }