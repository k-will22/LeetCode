/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
    let arr = [a, b, c]
    arr.sort((a, b) => a-b)

    if (arr[0] + arr[1] <= arr[2]) {
        return arr[0] + arr[1]
    } else {
        let min = Math.min(arr[0], Math.floor((arr[0] + arr[1] - arr[2]) / 2))
        return arr[2] + min
    }
};