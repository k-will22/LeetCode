/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let firstWord = {}
    let result = []
    
    for (let i = 0; i < A[0].length; i++) {
        if (firstWord[A[0][i]]) {
            firstWord[A[0][i]]++
        } else {
            firstWord[A[0][i]] = 1
        }
    }
    
    let keys = Object.keys(firstWord)

    for (let l = 0; l < keys.length; l++) {
        for (let j = 1; j < A.length; j++) {
            let count = 0
            for (let k = 0; k < A[j].length; k++) {
                if (A[j][k] == keys[l]) {
                    count++
                } 
            }
            if (count < firstWord[keys[l]]) {
                firstWord[keys[l]] = count
            }    
        }
    }
    for (let m = 0; m < keys.length; m++) {
        if (firstWord[keys[m]] > 0) {
            while (firstWord[keys[m]] > 0) {
                result.push(keys[m])
                firstWord[keys[m]]--
            }
        }
    }
    return result
};