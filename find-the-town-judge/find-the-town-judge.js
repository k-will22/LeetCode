/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if (trust.length < 1 && N === 1) {
        return N
    }
    let judge = []
    let obj = {}
    
    for (let i = 0; i < trust.length; i++) {
        judge.push(trust[i][1])
        obj[trust[i][0]] = true
    }
    
    let judgeSet = new Set(judge)
    let judgeArr = [...judgeSet]
    
    for (let j = 0; j < judgeArr.length; j++) {
        let town = []
        let judge
        for (let k = 0; k < trust.length; k++) {
            judge = judgeArr[j]
            if (trust[k][1] === judgeArr[j]) {
                town.push(trust[k][0])
            }
        }
        if (town.length === N - 1 && !obj[judge]) {
            return judge
        }
    }
    return -1
};