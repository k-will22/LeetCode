/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let front = 0
    let end = s.length - 1
    let counter = 0
    
    while (front < end) {
        if (s[front] === s[end]) {
            front++
            end--
        } else if ((end - front) <= 1) {
            return true
        } else if (s[front + 1] === s[end] && s[front] === s[end - 1]) {
            if (s[front + 2] === s[end - 3]) {
                end -= 2
                front++
                counter++
            } else if (s[front + 3] === s[end - 2]) {
                front += 2
                end--
                counter++
            } else {
                return false
            }
        } else if (s[front + 1] === s[end]) {
            front += 2
            end--
            counter++  
        } else if (s[front] === s[end - 1]) {
            end -= 2
            front++
            counter++
        } else {
            return false
        }
    }
    if (counter > 1) {
        return false
    } else {
        return true
    }
};