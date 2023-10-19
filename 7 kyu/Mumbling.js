/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
	// your code
  let a = []
  for(let i = 0; i< s.length; i++){
    a.push(s[i].repeat(i + 1) + '-')
  }
  
  let cut = a.join('').length

    return a.map(item => {
    return item[0].toUpperCase() + item.slice(1).toLowerCase()
  }).join('').slice(0, cut - 1)
}