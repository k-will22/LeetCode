/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    if (nums.length === 1) {
        return 0
    }
    
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let dif = max - min
    
    if (dif > k) {
        if ((k * 2) > dif) {
            return max - (min + dif)
        } else {
        return (max - k) - (min + k)
        }
    } else if (dif <= k) {
            return max - (min + dif)
        } 

    
};