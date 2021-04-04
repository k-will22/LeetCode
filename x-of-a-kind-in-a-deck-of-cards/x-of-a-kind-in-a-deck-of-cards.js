/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let obj = {}
        
        if (deck.length <= 1) {
            return false
        }
        
        for (let i = 0; i < deck.length; i++) {
            if (obj[deck[i]]) {
                obj[deck[i]]++
            } else {
                obj[deck[i]] = 1
            }
        }
    
    let values = Object.values(obj)
    let num = values[0]
    
    for (let j = 0; j < values.length; j++) {
        num = gcd(num, values[j])
        if (num < 2) {
            return false
        }
    }
        return num > 1
    
    function gcd(a, b) {
        return a == 0 ? b : gcd(b % a, a)
    }
};