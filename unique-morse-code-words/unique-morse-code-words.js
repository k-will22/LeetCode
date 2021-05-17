/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let obj = {}
    
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    for (let i = 0; i < words.length; i++) {
        let arr = []
        for (let j = 0; j < words[i].length; j++) {
            let num = words[i].charCodeAt(j) - 97
            arr.push(morse[num])
        }
        let concat = arr.join("")
        if (!(obj[concat])) {
            obj[concat] = true
        }
    }
    return Object.values(obj).length
};