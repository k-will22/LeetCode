/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let obj = {}
    let total = 0
    
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++
        } else {
            obj[s[i]] = 1
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        if (obj[t[j]] && obj[t[j]] > 0) {
            obj[t[j]]--
        } else {
            total++
        }
    }
    return total
};