/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    
    let arr = []
    let sum = 0
    
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] == "C") {
            arr.pop()
        } else if (ops[i] == "D") {
            arr.push(arr[arr.length - 1] * 2)
        } else if (ops[i] == "+") {
            arr.push(parseInt(arr[arr.length - 1]) + parseInt(arr[arr.length - 2]))
        } else {
            arr.push(ops[i])
        }
    }
    
    for (let j = 0; j < arr.length; j++) {
        sum += parseInt(arr[j])
    }
    
    return sum
};