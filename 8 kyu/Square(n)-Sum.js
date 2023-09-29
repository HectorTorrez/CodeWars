/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because  */

 function squareSum(numbers){
    let num = 0
      numbers.forEach(i => {
        let data = Math.pow(i, 2)
        num+= data
      })
    return num
  }