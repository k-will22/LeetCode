/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a, b) => a - b)
    let countArr = []
    let result = []
    
    for (let i = 0; i < arr.length; i++) {
        let bin = arr[i].toString(2)
        let count = 0
        for (let j = 0; j < bin.length; j++) {
            if (bin[j] == 1) {
                count++
            }
        }
        let subArr = [arr[i], count]
        countArr.push(subArr)
    }
    countArr.sort((a, b) => a[1] - b[1])
    console.log(countArr)
    for (let k = 0; k < countArr.length; k++) {
        result.push(countArr[k][0])
    }
    return result
};