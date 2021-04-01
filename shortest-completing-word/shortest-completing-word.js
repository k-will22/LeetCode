/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let sorted = words.sort((a, b) => a.length - b.length)
    let lettersArr = []
    
    for (let i = 0; i < licensePlate.length; i++) {
        if (licensePlate.charCodeAt(i) > 64 && licensePlate.charCodeAt(i) < 91 ||
           licensePlate.charCodeAt(i) > 96 && licensePlate.charCodeAt(i) < 123) {
            lettersArr.push(licensePlate[i].toLowerCase())
        }
    }
    for (let j = 0; j < words.length; j++) {
        let counter = 0
        let obj = {}
        for (let l = 0; l < lettersArr.length; l++) {
            if (lettersArr[l] in obj) {
                obj[lettersArr[l]]++
            } else {
                obj[lettersArr[l]] = 1
            }
        }  
        for (let k = 0; k < words[j].length; k++) {
              if (obj[words[j][k]] && obj[words[j][k]] >= 1) {
                  counter++
                  obj[words[j][k]]--
              }
          }
        if (counter === lettersArr.length) {
            return words[j]
        }
    }    
};