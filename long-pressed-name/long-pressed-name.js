/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let count = 0
    let one = 0
    let two = 0
    
    if (typed[typed.length-1] != name[name.length-1]) {
        return false
    }
    
    while (one < name.length) {
        if (name[one] == typed[two]) {
            count++
            one++
            two++
        } else if (typed[two] != name[one-1]) {
            return false
        } else {
            two++
        }
        if (two > typed.length) {
            break
        }
    }
    
    for (let i = two; i < typed.length; i++) {
        if (typed[i] != name[name.length-1]) {
            return false
        }
    }
    if (count == name.length) {
        return true
    } else {
        return false
    }
    
};