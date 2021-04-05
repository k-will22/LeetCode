/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) {
        return true
    }
    
    let counter = 1
    
    while (counter < n) {
        counter *= 2
        if (counter === n) {
            return true
        }
    }
    return false
};