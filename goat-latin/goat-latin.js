/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let count = 1
    let arr = S.split(" ")
    let result = []
    let obj = {
        "A": "A",
        "E": "E",
        "I": "I",
        "O": "O",
        "U": "U",
        "a": "a",
        "e": "e",
        "i": "i",
        "o": "o",
        "u": "u"
    }
    
    for (let i = 0; i < arr.length; i++) {
        let subArr = []
        let countdown = count
        if (obj[arr[i][0]]) {
            for (let j = 0; j < arr[i].length; j++) {
                subArr.push(arr[i][j])
            }
        } else {
            for (let k = 1; k < arr[i].length; k++) {
                subArr.push(arr[i][k])
            }
            subArr.push(arr[i][0])
        }
            subArr.push("m")
            subArr.push("a")
            while (countdown > 0) {
                subArr.push("a")
                countdown--
            }
        result.push(subArr.join(""))
        count++
    }
    return result.join(" ")
};