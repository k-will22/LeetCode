/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if (A === "" && B === "") {
        return true
    }
    let arr = A.split("")
    
    for (let i = 0; i < A.length; i++) {
        let first = arr[0]
        arr.shift()
        arr.push(first)
        if (arr.join("") === B) {
            return true
        }
    }
    return false
};