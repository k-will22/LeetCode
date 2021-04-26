/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let highest = -1
    let result
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i]
            result = i
        }
    }
    return result
};