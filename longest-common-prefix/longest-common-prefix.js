/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""
    }
    let arr = strs[0].split("")
    
    for (let i = 1; i < strs.length; i++) {
        let counter = 0
        for (let j = 0; j < strs[i].length; j++) {
            if (arr[j] === strs[i][j]) {
                counter++
            } else {
                break
            }
        }
        arr.splice(counter)
    }
    return arr.join("")
};