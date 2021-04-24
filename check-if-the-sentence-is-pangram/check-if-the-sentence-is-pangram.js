/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let obj = {}
    
    for (let i = 0; i < sentence.length; i++) {
        if (!obj[sentence[i]]) {
            obj[sentence[i]] = true
        }
    }
    
    if (Object.keys(obj).length === 26) {
        return true
    } else {
        return false
    }
    
};