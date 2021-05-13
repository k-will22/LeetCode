/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let arr = []
    let total = 0
    
    for (let i = 0; i < m; i++) {
        let subArr = []
        let count = 0
        while (count < n) {
            subArr.push(0)
            count++
        }
        arr.push(subArr)
    }
   
    for (let j = 0; j < indices.length; j++) {
        for (let k = 0; k < arr[indices[j][0]].length; k++) {
           arr[indices[j][0]][k]++
        }
        for (let l = 0; l < arr.length; l++) {
            arr[l][indices[j][1]]++
        }
    }
    
    for (let m = 0; m < arr.length; m++) {
        for (let n = 0; n < arr[m].length; n++) {
            if (arr[m][n] % 2 !== 0) {
                total++
            }
        }
    }
    return total
};