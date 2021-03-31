/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let arr = date.split(" ").reverse()
    let result = []
    let obj = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result.push(arr[i] + "-")
        } else if (i === 1) {
            result.push(obj[arr[i]] + "-")
        } else if (i === 2) {
            if (arr[i].length === 3) {
                result.push("0" + parseInt(arr[i]).toString())
            } else {
                result.push(parseInt(arr[i]).toString())
            }
        }
    }
    return result.join("")
};