/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let binX = x.toString(2).padStart(32, '0')
    let binY = y.toString(2).padStart(32, '0')
    console.log(binY, binX)
    let total = 0
    
    for (let i = 0; i < binX.length; i++) {
        if (binX[i] !== binY[i]) {
            total++
        }
    }
    return total
};