/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj = {}
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in obj)) {
           obj[s[i]] = 1  
        } else {
            obj[s[i]]++
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (obj[t[j]] >= 1) {
            obj[t[j]]--
        } else if (obj[t[j]] === 0) {
            return t[j]
        } else {
            return t[j]
        }
    }
    
};