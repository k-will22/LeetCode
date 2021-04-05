/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let arr = [a, b, c]
    let sorted = arr.sort((a, b) => a-b)
    let total = 0
    let smallest = 100
    let result = []
    
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i+1] - sorted[i] < smallest) {
            smallest = sorted[i+1] - sorted[i]
        }
        total += (sorted[i+1] - sorted[i]) - 1
    }
    
    if (total === 0) {
        return [0, 0]
    }
    else if (smallest <= 2) {
        result.push(1)
    } else {
        result.push(2)
    }
    result.push(total)
    return result
};

