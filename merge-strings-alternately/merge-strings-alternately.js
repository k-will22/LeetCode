/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    i = 0
    let arr = []
    
    while (i < word1.length && i < word2.length) {
        if (i < word1.length && i < word2.length) {
            arr.push(word1[i])
            arr.push(word2[i])
            i++
        } 
    }
    
    while (i < word1.length) {
        arr.push(word1[i])
        i++
    }
    
    while (i < word2.length) {
        arr.push(word2[i])
        i++
    }
    
    return arr.join("")
};