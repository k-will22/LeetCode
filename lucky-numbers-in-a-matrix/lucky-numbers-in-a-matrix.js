/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let result = []
    
    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i])
        let index = matrix[i].indexOf(min)

        for (let j = 0; j < matrix.length; j++) {
            if (j !== i && matrix[j][index] >= min) {
                break
            } else if (j === matrix.length - 1) {
                result.push(min)
            }
        }
        
    }
    return result
};