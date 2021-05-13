/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let sum = 0
    let str = ""
    
    for (let i = 0; i < S.length; i++) {
        if (sum == 1) {
            if (S[i] == "(") {
                str += S[i]
            }
        }
        if (sum > 1) {
            str += S[i]
            } 
        if (S[i] == "(") {
            sum++
        }
        if (S[i] == ")") {
            sum--
        }
    }
    return str
};