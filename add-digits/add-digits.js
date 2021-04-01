/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let arr = num.toString().split("")
    
    if (arr.length === 1) {
        return num
    }
    
    while (arr.length > 1) {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            total += parseInt(arr[i])         
        }
        arr = total.toString().split("")
        total = 0
    }
    return parseInt(arr[0])
};