/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */


function fakeBin(x){
    let cut = ''
    for(const element of x){
      if(parseInt(element) < 5){
         cut += '0'
         }else{
           cut +='1'
         }
      
    }
      return cut
     
  }