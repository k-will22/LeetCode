/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let temp = ''
    
    for (let i = 1; i < s.length; i++) {
        temp = s.substr(0, i)
        if (temp === s.length) {
            return false
        }
        if (s === genStr(temp, s.length)) {
            return true
        }
    }
    return false
};

function genStr(sub, max) {
    let str = sub
    while (str.length < max) {
        str += sub
    }
    return str
}