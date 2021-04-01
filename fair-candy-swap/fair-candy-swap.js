/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let total1 = 0
    let total2 = 0
    let diff = 0
    let result = []
    
    for (let i = 0; i < A.length; i++) {
        total1 += A[i]
    }
    
    for (let j = 0; j < B.length; j++) {
        total2 += B[j]
    }
    
    diff = (total1 - total2) / 2
    
    for (let k = 0; k < A.length; k++) {
        for (let l = 0; l < B.length; l++) {
            if (A[k] - B[l] === diff) {
                result.push(A[k])
                result.push(B[l])
                return result
            }
        }
    }
    
};