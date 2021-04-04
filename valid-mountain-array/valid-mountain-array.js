/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    }
    
    let result = true
    
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            return false
        }
        else if (arr[i] === arr[i+1]) {
            return false
        }
        else if (arr[i+1] < arr[i]) {
            if (i === 0) {
                return false
            } else {
                 decreasing(arr, i)
                 break 
            }
        }
    }
  
    
    function decreasing(array, start) {
        for (let j = start; j < array.length - 1; j++) {
            if (array[j+1] >= array[j]) {
                result = false
            }
        }
    }
    return result
};