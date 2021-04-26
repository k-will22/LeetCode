/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let total = 0
    
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0].charCodeAt(i)
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].charCodeAt(i) < currentChar) {
                total++
                break
            } else {
                currentChar = strs[j].charCodeAt(i)
            }
        }
    }
    return total
};