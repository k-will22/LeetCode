/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            arr.push(s[i])
        } else if (s[i] == ')') {
            if (arr[arr.length-1] != '(') {
                return false
            } else {
                arr.pop()
            }
        } else if (s[i] == '}') {
            if (arr[arr.length-1] != '{') {
                return false
            } else {
                arr.pop()
            }
        } else if (s[i] == ']') {
            if (arr[arr.length-1] != '[') {
                return false
            } else {
                arr.pop()
            }
        }
    }
    if (arr.length == 0) {
        return true
    } else {
        return false
    }
};