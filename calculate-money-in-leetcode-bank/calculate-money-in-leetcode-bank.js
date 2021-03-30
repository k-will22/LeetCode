/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let counter = 7
    let increment1 = 1
    let result = 0
    
    while (n > 0) {
        let increment2 = 0
        for (let i = 0; i < counter; i++) {
            if (n > 0) {
                result += (increment1 + increment2)
                increment2++
            }
            n--
        }
        increment1++
    }
    return result
};