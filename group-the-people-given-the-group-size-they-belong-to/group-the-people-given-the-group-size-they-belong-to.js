/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result = []
    
    for (let i = 0; i < groupSizes.length; i++) {
          let counter = groupSizes[i]
        let newArr = []
        
        if (groupSizes[i] >= 0) {
        newArr.push(i)
        }
        
     
            for (let j = i+1; j < groupSizes.length; j++) {
                if (groupSizes[i] === -1) {
                    break
                } else if (newArr.length >= counter) {
                    break
                } else if (groupSizes[j] === groupSizes[i]) {
                    newArr.push(j)
                   groupSizes[j] = -1
                }
            }
        if (newArr.length > 0) {
            result.push(newArr)
        }
     
    }  
    return result
};