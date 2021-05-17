/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    if ((coordinates.charCodeAt(0) + parseInt(coordinates[1])) % 2 == 0) {
        return false
    } else {
        return true
    }
};