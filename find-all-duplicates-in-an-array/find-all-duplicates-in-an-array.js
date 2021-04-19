/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {}
    let arr = []
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            arr.push(nums[i])
        } else {
            obj[nums[i]] = true
        }
    }
    return arr
};