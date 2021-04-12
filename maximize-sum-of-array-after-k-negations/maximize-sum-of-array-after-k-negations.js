/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    let count = K
    let sorted = A.sort((a, b) => a-b)
    let result = 0
    
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] < 0 && count > 0) {
            sorted[i] = Math.abs(sorted[i])
            count--
        } else if (sorted[i] === 0) {
            count = 0
            break
        } else {
            break
        }
    }
    
    let sorted2 = sorted.sort((a, b) => a-b)
    
    if (count % 2 !== 0 && count !== 0) {
        sorted2[0] = -Math.abs(sorted[0])
    }
    
    for (let j = 0; j < sorted2.length; j++) {
        result += sorted2[j]
    }
    return result
};