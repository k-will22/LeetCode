/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = [0, 1]
    
    if (n <= 1) {
        return arr[n]
    } else if (n > 1) {
       for (let i = 0; i < n - 2; i++) {
           arr.push(arr[arr.length - 1] + arr[arr.length - 2])
       }
    }

    return arr[arr.length - 1] + arr[arr.length - 2]
};