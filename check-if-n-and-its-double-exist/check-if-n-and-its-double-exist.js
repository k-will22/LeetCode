/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let obj = {}
    let counter = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            counter++
            if (counter === 2) {
                return true
            }
        }
        obj[arr[i]] = true
    }
    
    for (let j = 0; j < arr.length; j++) {
        let double = arr[j] * 2
        if (obj[double] && arr[j] !== 0) {
            return true
        }
    }
    return false
};