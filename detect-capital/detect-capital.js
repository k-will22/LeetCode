/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
    if (word.length === 1) {
        return true
    }
    
    if (word[0] === word[0].toUpperCase() && 
        word[1] === word[1].toUpperCase()) {
            return allCaps(word)
        } else {
            return lower(word)
        }
    
    function allCaps(word) {
    for (let i = 2; i < word.length; i++) {
        if (word[i] !== word[i].toUpperCase()) {
                return false
            }
        }
        return true
    }
    
    function lower(word) {
        for (let j = 1; j < word.length; j++) {
        if (word[j] !== word[j].toLowerCase()) {
                return false
            }
        }
        return true
    }
};