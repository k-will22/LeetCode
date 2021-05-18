/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let obj = {}
    let min = Infinity
    let result = []
    arr.sort((a, b) => a-b)
    obj[arr[0]] = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        obj[arr[i]] = arr[i]
        let diff = arr[i] - arr[i-1]
        min = Math.min(min, diff)
    }
    
    for (let j = 0; j < arr.length; j++) {
        let target = arr[j] + min
        if (obj[target]) {
            result.push([arr[j], obj[target]])
        }
    }
    return result
};