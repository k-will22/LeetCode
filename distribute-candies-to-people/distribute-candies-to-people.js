/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr = new Array(num_people)
    arr.fill(0)
    let count = 1
    let index = 0
    
    while (count <= candies) {
        arr[index] += count
        candies -= count
        if (index == num_people - 1) {
            index = 0
        } else {
            index++
        }
        count++
    }
    if (candies > 0) {
        arr[index] += candies
    }
    return arr
};