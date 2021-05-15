/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let str = ""
    
    for (let i = 0; i < s.length; i++) {
        if (s[i+2] == "#") {
            let char = 96 + parseInt(s[i] + s[i+1])
            str += String.fromCharCode(char)
            i += 2
        } else {
            let char = 96 + parseInt(s[i])
            str += String.fromCharCode(char)
        } 
    }
    return str
};