/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let temp = []
    let str = "0123456789"
    let result = []
    
    for (let i = 0; i < number.length; i++) {
        if (str.includes(number[i])) {
            temp.push(number[i])
        }
    }
    
    let remainder = temp.length % 3
    
    if (remainder == 0) {
        let count = 3
        for (let i = 0; i < temp.length-3; i++) {
            result.push(temp[i])
            if (count == 1) {
                result.push("-")
                count = 4
            }
            count--
        }
        result.push(temp[temp.length-3])
        result.push(temp[temp.length-2])
        result.push(temp[temp.length-1])
    } else if (remainder == 2) {
        let count = 3
        for (let i = 0; i < temp.length-2; i++) {
            result.push(temp[i])
            if (count == 1) {
                result.push("-")
                count = 4
            }
            count--
        }
        result.push(temp[temp.length-2])
        result.push(temp[temp.length-1])
    } else {
        let count = 3
        for (let i = 0; i < temp.length-4; i++) {
            result.push(temp[i])
            if (count == 1) {
                result.push("-")
                count = 4
            }
            count--
        }
        result.push(temp[temp.length-4])
        result.push(temp[temp.length-3])
        result.push("-")
        result.push(temp[temp.length-2])
        result.push(temp[temp.length-1])
    }
    return result.join("")
};