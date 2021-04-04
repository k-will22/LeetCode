/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let arr = []
    let obj = {}
    counter = 1
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            arr.push(nums[i])
        } else {
            obj[nums[i]] = true
        }
    }
    
    for (let j = 1; j < nums.length + 1; j++) {
        if (!(obj[j])) {
            arr.push(j)
        }
    }
    return arr
};