/* Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway */

function noBoringZeros(n) {
    // your code
     const toN = n.toString()
    const cut = toN.split('')
    if(n === 0) return n
  for(let i = cut.length - 1; i>=0; i--){
    if(cut[i] === '0'){
      cut[i] = ''
    }else{
      break;
    }
  }

    let result = cut.join('')

    return parseInt(result)
    
    
  }