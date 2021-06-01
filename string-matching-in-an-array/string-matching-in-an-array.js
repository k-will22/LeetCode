/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j != i && words[i].includes(words[j])) {
                result.push(words[j])
            }
        }
    }
    return [...new Set(result)]
};