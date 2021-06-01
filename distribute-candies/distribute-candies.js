/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    let arr = [...set]
    let half = candyType.length / 2
    if (arr.length >= half) {
        return half
    } else {
        return arr.length
    }
    
};