/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let numsSet = new Set(nums)
    let setArray = [...numsSet]
    
    let sorted = setArray.sort((a, b) => b-a)
    
    if (sorted.length <= 2) {
        return sorted[0]
    } else {
        return sorted[2]
    }
    
};