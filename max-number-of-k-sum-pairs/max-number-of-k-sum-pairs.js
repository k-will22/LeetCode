/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let sorted = nums.sort((a, b) => a-b)
    let front = 0
    let end = sorted.length - 1
    let result = 0
    
    while (front < end) {
        if (sorted[front] + sorted[end] === k) {
            result++
            front++
            end--
        } else if (sorted[front] + sorted[end] > k) {
            end--
        } else if (sorted[front] + sorted[end] < k) {
            front++
        }
    }
    return result
};