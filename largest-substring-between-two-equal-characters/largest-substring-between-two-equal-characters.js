/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let obj = {}
    let total = -1
    
    for (let i = 0; i < s.length; i++) {
        if ([s[i]] in obj) {
            if ((i - obj[s[i]]) - 1 > total) {
                total = (i - obj[s[i]]) - 1
            }
        } else {
            obj[s[i]] = i
        }
    }
    return total
};