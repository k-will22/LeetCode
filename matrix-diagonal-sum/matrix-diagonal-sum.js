/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    let start = 0
    let end = mat[0].length - 1
    
    for (let i = 0; i < mat.length; i++) {
            if (start !== end) {
                 sum += mat[i][start]
                 sum += mat[i][end]
            } else {
            sum += mat[i][start]
            }
        start++
        end--
    }
    return sum
};