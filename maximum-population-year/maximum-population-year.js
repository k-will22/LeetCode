/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {

    if (logs.length == 1) {
        return logs[0][0]
    }
    
    let year
    let max = 0
    
    for (let i = 0; i < logs.length; i++) {
            let count = 0
        for (let j = 0; j < logs.length; j++) {
            if (logs[i][0] >= logs[j][0] && logs[i][0] < logs[j][1]) {
                count++         
            }
        }
        if (count > max) {
            year = logs[i][0]
            max = count
        } 
        if (count == max) {
            year = Math.min(logs[i][0], year)
        }
    }
        return year
};