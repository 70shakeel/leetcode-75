// Equal Row and Column Pairs
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a 0 - indexed n x n integer matrix grid, return the number of pairs(ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order(i.e., an equal array).



//     Example 1:


// Input: grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2, 7, 7]
// Example 2:


// Input: grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3, 1, 2, 2]
//     - (Row 2, Column 2): [2, 4, 2, 2]
//         - (Row 3, Column 2): [2, 4, 2, 2]
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    function isEqualRowColumnPair(grid, row, col) {
        const n = grid.length;
        for (let i = 0; i < n; i++) {
            if (grid[row][i] !== grid[i][col]) {
                return false;
            }
        }
        return true;
    }
    let count = 0;
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isEqualRowColumnPair(grid, i, j)) {
                count++;
            }
        }
    }

    return count;

};