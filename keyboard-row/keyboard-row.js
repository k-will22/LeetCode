/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let one = ["q","w","e","r","t","y","u","i","o","p"]
    let two = ["a","s","d","f","g","h","j","k","l"]
    let three = ["z","x","c","v","b","n","m"]
    let result = []
    
    let row
    
    for (let i = 0; i < words.length; i++) {
        let first = words[i][0].toLowerCase()
        if (one.includes(first)) {
            row = one
            } else if (two.includes(first)) {
                row = two
            } else {
                row = three
            }
        let count = 0
        for (let j = 0; j < words[i].length; j++) {
            if (row.includes(words[i][j].toLowerCase())) {
                count++
            }
        }
        if (count == words[i].length) {
            result.push(words[i])
        }
    }
    return result
};