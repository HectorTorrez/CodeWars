/* Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error". */


function problem(x){
    //your code here
    if(typeof(x) === 'string'){
      return 'Error'
    }
    return x * 50 + 6
  }

// best practice

function problem(x){
    return typeof x === 'string' ? 'Error' : x * 50 + 6
}
