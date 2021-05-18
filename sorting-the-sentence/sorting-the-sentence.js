/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ")
    arr.sort((a, b) => a[a.length-1] - b[b.length-1])
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let subArr = []
        for (let j = 0; j < arr[i].length-1; j++) {
            subArr.push(arr[i][j])
        }
        result.push(subArr.join(""))
    }
    return result.join(" ")
};