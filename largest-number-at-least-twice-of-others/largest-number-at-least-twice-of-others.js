/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max)
    console.log(max)
    
    let sorted = nums.sort((a, b) => a-b)
    
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] * 2 > max) {
            return -1
        }
    }
    return maxIndex
};