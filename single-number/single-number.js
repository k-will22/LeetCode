/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sorted = nums.sort((a, b) => a-b)
    
    for (let i = 0; i < nums.length; i = i+2) {
        if (!(nums[i] == nums[i+1])) {
            return nums[i]
        }
    }
    
};