/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a, b) => b-a)
    let obj = {}
    
    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            obj[sorted[i]] = "Gold Medal"
        } else if (i === 1) {
            obj[sorted[i]] = "Silver Medal"
        } else if (i === 2) {
            obj[sorted[i]] = "Bronze Medal"
        } else {
            obj[sorted[i]] = (i + 1).toString()
        }
    }
    
    for (let j = 0; j < score.length; j++) {
        score[j] = obj[score[j]]
    }
    return score
};