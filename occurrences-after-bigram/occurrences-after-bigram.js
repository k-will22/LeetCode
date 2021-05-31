/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let arr = text.split(" ")
    let result = []
    
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] == first && arr[i+1] == second) {
            result.push(arr[i+2])
        }
    }
    return result
};