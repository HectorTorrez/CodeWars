/* Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

If there are no issues with the kata and you successfully completed it, please rank and upvote! */

function sortItOut(array){
    //Write your own code!
      if(array.length === 0) return []
      let odd = []
      let even = []
      for(let number of array){
        let numberTrunc = Math.trunc(number)
        if(numberTrunc % 2 === 0){
          even.push(number)
        }else{
          odd.push(number)
        }
      }
      let evenSort = even.sort((a,b) => (a > b ? -1 : 1))
      let oddSort = odd.sort((a,b) => (a > b ? 1 : -1))
    
      
      return oddSort.concat(evenSort)
    }