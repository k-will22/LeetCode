/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let count = 1
    while (count <= mat[0].length) {
        
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i+1]) {
            if (mat[i+1][j+1]) {
            if (mat[i][j] > mat[i+1][j+1]) {
                let temp = mat[i+1][j+1]
                mat[i+1][j+1] = mat[i][j]
                mat[i][j] = temp
            }
          }
         }
        }
      }
        count++
    }
    return mat
};