/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let reverse = s.split("").reverse().join("")
    
    if (s == reverse) {
        return 1
    } else {
        return 2
    }
};