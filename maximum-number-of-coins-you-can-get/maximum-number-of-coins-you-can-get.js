/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let counter = (piles.length / 3)
    let total = 0
    
    let sorted = piles.sort((a, b) => b-a)
    
    for (let i = 1; i < sorted.length; i += 2) {
        if (counter === 0) {
            break
        }
        total += sorted[i]
        counter--
    }
    
    return total
};