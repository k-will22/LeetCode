/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let arr = []
    
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            arr.push(s[i])
        } else {
            let char = s.charCodeAt(i-1)
            char += parseInt(s[i])
            arr.push(String.fromCharCode(char))
        }
    }
    return arr.join("")
};