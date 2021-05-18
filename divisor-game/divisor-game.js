/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    let alice = false
    let count = 1
    
    while (count < n) {
        if (n % count == 0) {
            count = 1
            alice = !alice
            n = n - count
        } else {
            count++
        }
    }
    return alice
};