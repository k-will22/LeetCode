/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let arr = [0, 1]
    
    if (n < 2) {
        return arr[n]
    }
    
    for (let i = 2; i < n+1; i++) {
        if (i % 2 === 0) {
            arr[i] = arr[i / 2]
        } else {
            arr[i] = (arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1])
        }
    }
    return Math.max(...arr)
};