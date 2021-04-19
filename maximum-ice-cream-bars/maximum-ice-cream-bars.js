/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let currentCoins = coins
    let sorted = costs.sort((a, b) => a-b)
    
    for (let i = 0; i < sorted.length; i++) {
        currentCoins -= sorted[i]
        if (currentCoins === 0) {
            return i + 1
            } else if (currentCoins < 0) {
                return i
            }
    }
    return sorted.length
};