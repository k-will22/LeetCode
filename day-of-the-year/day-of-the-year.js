/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let arr = date.split("-")
    obj = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    
    let month = parseInt(arr[1])
    let total = 0
    
    for (let i = 1; i < month; i++) {
        total += obj[i]
    }
    
    if (arr[0] % 4 === 0 && month > 2 && !(arr[0] % 100 === 0)) {
        total += 1
    } 
    
    total += parseInt(arr[2])
    return total
    
};