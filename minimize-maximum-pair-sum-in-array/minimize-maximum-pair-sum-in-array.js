/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a-b)
    let front = 0
    let end = nums.length - 1
    let max = 0
    
    while (front < end) {
        max = Math.max(max, (nums[front] + nums[end]))
        front++
        end--
    }
    return max
};