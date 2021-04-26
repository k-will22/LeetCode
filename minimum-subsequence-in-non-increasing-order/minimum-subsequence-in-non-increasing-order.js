/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b-a)
    let result = []
    let total = 0
    let resultTotal = 0

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    
    for (let j = 0; j < nums.length; j++) {
        total -= nums[j]
        result.push(nums[j])
        resultTotal += nums[j]
        if (resultTotal > total) {
            return result
        }
    }
    
};