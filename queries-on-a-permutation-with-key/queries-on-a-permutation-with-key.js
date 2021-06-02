/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let count = 1
    let arr = []
    let result = []
    
    while (count <= m) {
        arr.push(count)
        count++
    }
    
    for (let i = 0; i < queries.length; i++) {
        let temp = queries[i]
        let index = arr.indexOf(queries[i])
        result.push(index)
        arr.splice(index, 1)
        arr.unshift(temp)
    }
    return result
};