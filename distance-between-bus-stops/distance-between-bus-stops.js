/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let one = 0
    let two = 0
    
    for (let i = 0; i < distance.length; i++) {
        if (start > destination) {
            if (i < destination || i >= start) {
            one += distance[i]
        } else {
            two += distance[i]
        }
        } else {
          if (i >= start && i < destination) {
            one += distance[i]
        } else {
            two += distance[i]
        }  
        }
    }
    return Math.min(one, two)
};