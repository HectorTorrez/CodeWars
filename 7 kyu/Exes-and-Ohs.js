/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
    //code here
    let X = 0
    let O = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes('x') || str[i].includes('X')) {
            X++
        } else if (str[i].includes('o') || str[i].includes('O')) {
            O++
        }
    }


    return X === O
}