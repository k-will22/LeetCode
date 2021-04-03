/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let arr = []
    let total = 0
    
    for (let i = num - 1; i >= 0; i--) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    for (let j = 0; j < arr.length; j++) {
        total += arr[j]
    }
 
    if (total === num) {
        return true
    } else {
        return false
    }
    
};