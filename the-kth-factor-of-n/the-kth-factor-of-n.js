/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let arr = []
    let count = n
    
    while (count > 0) {
        if (n % count === 0) {
            arr.unshift(count)
        }
        count--
    }
    if (arr[k-1] !== undefined) {
        return arr[k-1]
    } else {
        return -1
    }
    
};