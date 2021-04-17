/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let front = 1
        let back = n
        let mid = Math.floor((back - front) / 2) + front
        
        while (front < back) {
            if (isBadVersion(mid)) {
                back = mid
                mid = Math.floor((back - front) / 2) + front
            } else {
                front = mid + 1
                mid = Math.floor((back - front) / 2) + front
            }
        }
        return front
    };
};