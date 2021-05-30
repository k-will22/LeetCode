/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let count = 1
    let obj = {}
    let result = 0
    
    while (count <= n) {
        let total = 0
        let str = count.toString()
        if (str.length > 1) {
            let arr = str.split("")
            for (let j = 0; j < arr.length; j++) {
                total += parseInt(arr[j])
            }
        } else {
            total = count
        }
        if (obj[total]) {
            obj[total]++
        } else {
            obj[total] = 1
        }
        count++
    }
    
    let values = Object.values(obj)
    let max = Math.max(...values)
    for (let i = 0; i < values.length; i++) {
        if (values[i] == max) {
            result++
        }
    }
    return result
};