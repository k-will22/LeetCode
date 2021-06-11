/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    let count = 0
    let sCopy = s
    let goalCopy = goal
    let sSort = sCopy.split("").sort().join("")
    let goalSort = goalCopy.split("").sort().join("")
    if (sSort != goalSort) {
        return false
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) {
            count++
        }
    }
    if (count == 0) {
        let obj = {}
        for (let i = 0; i < s.length; i++) {
            if (obj[s[i]]) {
                return true
            } else {
                obj[s[i]] = true
            }
        }
        return false
    }
    if (count != 2) {
        return false
    }
    return true
};