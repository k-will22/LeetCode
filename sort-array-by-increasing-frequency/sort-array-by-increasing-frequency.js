/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let obj = {}
    result = []
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    let arr = Object.keys(obj).sort((a, b) => b-a)
    let count = 1
    
    while (result.length < nums.length) {
        for (let j = 0; j < arr.length; j++) {
            if (obj[arr[j]] == count) {
                let countdown = count
                while (countdown > 0) {
                    result.push(arr[j])
                    countdown--
                }
                
            }
        }
        count++
    }
    return result
};