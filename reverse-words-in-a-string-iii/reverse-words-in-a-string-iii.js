/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ")
    let result = []
    console.log(arr)
    
    for (let i = 0; i < arr.length; i++) {
        let strArr = arr[i].split("")
        result.push(strArr.reverse().join(""))
    }
    return result.join(" ")
};