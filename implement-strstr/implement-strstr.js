/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length == 0) {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            let k = i
            let count = 0
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] == haystack[k]) {
                    count++
                    k++
                } else {
                    break
                }
            }
            if (count == needle.length) {
                return i
            }
        }
    }
    return -1
};