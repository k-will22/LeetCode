/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let front = 0
    let end = nums.length - 1
    let mid = front + Math.floor((end - front) / 2)
    
    while (end >= front) {
        if (nums[mid] !== target) {
            if (nums[mid] < target) {
                front = mid + 1
                mid = front + Math.floor((end - front) / 2)
            } else {
                end = mid - 1
                mid = front + Math.floor((end - front) / 2)
            }
        } else {
            return mid
        }
    }
    return - 1
};