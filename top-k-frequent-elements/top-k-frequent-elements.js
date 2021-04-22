/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        let obj = {}
    
    let arr = []
    let result = []
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    
    for (let num in obj) {
        arr.push([num, obj[num]])
    }
    
    let sorted = arr.sort((a, b) => b[1] - a[1])
    
    for (let j = 0; j < k; j++) {
        result.push(sorted[j][0])

        }
    
    return result
};