/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same. */

function distinct(a) {
    let data = []
    for(let i = 0; i < a.length; i++){
      if(data.includes(a[i])){
        continue
      } else {
      data.push(a[i])
      }
    }
    return data;
  }