/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let obj = {}
    
    let arr = []
    let result = []
    
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++
        } else {
            obj[s[i]] = 1
        }
    }
    
    for (let letter in obj) {
        arr.push([letter, obj[letter]])
    }
    
    let sorted = arr.sort((a, b) => b[1] - a[1])
    
    for (let j = 0; j < sorted.length; j++) {
        let count = sorted[j][1]
        while (count > 0) {
            result.push(sorted[j][0])
            count--
        }
    }
    return result.join("")
};