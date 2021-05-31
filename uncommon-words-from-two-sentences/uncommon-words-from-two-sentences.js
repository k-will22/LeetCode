/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let s1Arr = s1.split(" ")
    let s2Arr = s2.split(" ")
    let obj = {}
    let result = []
    
    for (let i = 0; i < s1Arr.length; i++) {
        if (obj[s1Arr[i]]) {
            obj[s1Arr[i]]++
        } else {
            obj[s1Arr[i]] = 1
        }
    }
    
        for (let i = 0; i < s2Arr.length; i++) {
        if (obj[s2Arr[i]]) {
            obj[s2Arr[i]]++
        } else {
            obj[s2Arr[i]] = 1
        }
    }
    
    let arr = Object.keys(obj)
    
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == 1) {
            result.push(arr[i])
        }
    }
    return result
    
};