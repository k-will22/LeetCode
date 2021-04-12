/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let counter = low
    result = 0
    
    while (counter <= high) {
        if (counter % 2 !== 0) {
            result++
        }
        counter++
    }
    
    return result
};