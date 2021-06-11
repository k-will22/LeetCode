/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let arr = []
    
    for (let i = 0; i < time.length; i++) {
        if (time[i] == "?") {
            if (i == 0) {
                if (time[1] == "?" || time[1] <= 3) {
                    arr.push(2)
                } else {
                    arr.push(1)
                }
            } else if (i == 1) {
                if (time[0] == 1 || time[0] == 0) {
                    arr.push(9)
                } else {
                    arr.push(3)
                }
            } else if (i == 3) {
                arr.push(5)
            } else if (i == 4) {
                arr.push(9)
            }
        } else {
            arr.push(time[i])
        }
    }
    return arr.join("")
};