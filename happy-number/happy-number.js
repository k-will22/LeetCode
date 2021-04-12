/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let string = n.toString()
    let arr = string.split("")
    let total = 0
    let set = new Set()
    
    while (parseInt(string) !== 1) {
        for (let i = 0; i < arr.length; i++) {
            total += (parseInt(arr[i]) * parseInt(arr[i]))
        }
        string = total.toString()
           if (set.has(string)) {
           return false
       }
        set.add(string)
        arr = string.split("")
        total = 0
    }
    return true
    
};