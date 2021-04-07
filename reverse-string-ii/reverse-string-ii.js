/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let counter = 1
    let arr = []
    let result = []
    let place = 0
    
    while (result.length < s.length) {
        for (let i = place; i < place + k; i++) {
            arr.push(s[i])
        }
        if (counter % 2 === 1) {
            result.push(...arr.reverse())
        } else {
            result.push(...arr)
        }
        arr = []
        place = place + k
        counter++
    }
    
    return result.join("")
};