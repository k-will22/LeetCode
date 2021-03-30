/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let arr = sentence.split(" ")
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= searchWord.length) {
            let counter = 0
            for (let j = 0; j < searchWord.length; j++) {
                if (arr[i][j] == searchWord[j]) {
                    counter++
                }
                if (counter === searchWord.length) {
                    return i + 1
                }
            }
        }
    }
    return -1
};