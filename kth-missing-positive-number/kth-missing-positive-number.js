/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let counter = 0
    let result = 1
    let pointer = 0
    
    while (counter < k) {
        if (result === arr[pointer]) {
            pointer++
        } else {
            counter++
        }
        result++
    }
    
    
    return result - 1
};