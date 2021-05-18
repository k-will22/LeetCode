/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = []
    
    for (let i = 0; i < nums1.length; i++) {
        let idx = nums2.indexOf(nums1[i])
        result[i] = -1
        for (let j = idx + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                result[i] = nums2[j]
                break
            }
        }
    }
    return result
    
};