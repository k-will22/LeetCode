/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let obj = {}
    let total = Infinity
    let result = []
    
    for (let i = 0; i < list1.length; i++) {
        obj[list1[i]] = i
    }
    
    for (let j = 0; j < list2.length; j++) {
        if (obj[list2[j]] > -1) {
            if ((obj[list2[j]] + j) < total) {
                result = [list2[j]]
                total = obj[list2[j]] + j
            } else if ((obj[list2[j]] + j) === total) {
                result.push(list2[j])
            }
        }
    }
    return result
};