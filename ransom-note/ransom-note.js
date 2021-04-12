/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let obj = {}
    
    for (let i = 0; i < magazine.length; i++) {
        if (obj[magazine[i]]) {
            obj[magazine[i]]++
        } else {
            obj[magazine[i]] = 1
        }
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        if (!(obj[ransomNote[j]])) {
            return false
        } else if (obj[ransomNote[j]] <= 0) {
            return false
        } else {
            obj[ransomNote[j]]--
        }
    }
    return true
};