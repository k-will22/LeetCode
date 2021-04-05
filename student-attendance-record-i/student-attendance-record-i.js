/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0
    let conLate = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A') {
            absentCount++
            if (absentCount > 1) {
                return false
            }
        }
        if (s[i] === 'L') {
            conLate++
            if (conLate > 2) {
                return false
            }
        } else {
            conLate = 0
        }
    }
    return true
};