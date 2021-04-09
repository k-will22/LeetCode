/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let first = 0
    let second = 0
    counter = 0
    
    while (second < t.length) {
        if (s[first] === t[second]) {
            counter++
            first++
            second++
        } else {
            second++
        }
    }
    if (counter === s.length) {
        return true
    } else {
        return false
    }
};