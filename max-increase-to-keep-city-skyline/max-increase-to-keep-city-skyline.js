/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let vertical = new Array(grid.length).fill(0)
    let horizontal = new Array(grid.length).fill(0)
    let total = 0
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > horizontal[i]) {
                horizontal[i] = grid[i][j]
            }
            if (grid[i][j] > vertical[j]) {
                vertical[j] = grid[i][j]
            }
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let max = Math.min(horizontal[i], vertical[j])
            if (grid[i][j] < max) {
                total += (max - grid[i][j])
            }
        }
    }
    return total
};