/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let arr = boxes.split("")
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
         let total = 0
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) {
                if(parseInt(arr[j]) === 1 && j < i) {
                    total += (i - j)
                } else if (parseInt(arr[j]) === 1 && j > i) {
                    total += (j - i)
                }
            }
        } 
            result.push(total)
    }
    return result
};