/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let arr = []
    let max = 0
    let index
    let doubles = []
    let chars = []
    
    for (let i = 0; i < releaseTimes.length; i++) {
        if (i === 0) {
            arr.push(releaseTimes[i])
        } else {
            arr.push(releaseTimes[i] - releaseTimes[i - 1])
        }
    }
    
    for (let j = 0; j < arr.length; j++) {
       if (arr[j] > max) {
           max = arr[j]
           index = j
       }
    }
    
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] === max && k !== index) {
            doubles.push(k)
        }
    }
    
    chars.push(keysPressed[index])
    
    for (let l = 0; l < doubles.length; l++) {
        chars.push(keysPressed[doubles[l]])
    }
    
   let sorted = chars.sort((a, b) => b.localeCompare(a))
   
    return sorted[0]
};