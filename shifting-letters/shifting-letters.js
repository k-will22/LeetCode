/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let arr = []
    let total = 0
    
    for (let i = shifts.length-1; i >= 0; i--) {
        total += shifts[i]
        shifts[i] = total % 26
    }
    
    
	for (let i = 0; i < s.length; i++) {
        let count = i - 1
		let code = s.charCodeAt(i) + shifts[i]
	    while (code > 122) {
		code = (code - 122) + 96
		}
		arr.push(String.fromCharCode(code))    
	}
	return arr.join('')
};