// Nearest Exit from Entrance in Maze
// Medium
// Topics
// Companies
// Hint
// You are given an m x n matrix maze(0 - indexed) with empty cells(represented as '.') and walls(represented as '+').You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right.You cannot step into a cell with a wall, and you cannot step outside the maze.Your goal is to find the nearest exit from the entrance.An exit is defined as an empty cell that is at the border of the maze.The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or - 1 if no such path exists.



//     Example 1:


// Input: maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], entrance = [1, 2]
// Output: 1
// Explanation: There are 3 exits in this maze at[1, 0], [0, 2], and[2, 3].
//     Initially, you are at the entrance cell[1, 2].
// - You can reach[1, 0] by moving 2 steps left.
// - You can reach[0, 2] by moving 1 step up.
// It is impossible to reach[2, 3] from the entrance.
//     Thus, the nearest exit is[0, 2], which is 1 step away.
//         Example 2:


// Input: maze = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], entrance = [1, 0]
// Output: 2
// Explanation: There is 1 exit in this maze at[1, 2].
// [1, 0] does not count as an exit since it is the entrance cell.
//     Initially, you are at the entrance cell[1, 0].
// - You can reach[1, 2] by moving 2 steps right.
//     Thus, the nearest exit is[1, 2], which is 2 steps away.
//         Example 3:


// Input: maze = [[".", "+"]], entrance = [0, 0]
// Output: -1
// Explanation: There are no exits in this maze.
function nearestExit(maze, entrance) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [entrance];
    const m = maze.length;
    const n = maze[0].length;
    const visited = new Set();
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();
            if ((x !== entrance[0] || y !== entrance[1]) && (x === 0 || x === m - 1 || y === 0 || y === n - 1)) {
                return steps;
            }
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < m && newY >= 0 && newY < n && maze[newX][newY] === '.' && !visited.has(`${newX},${newY}`)) {
                    visited.add(`${newX},${newY}`);
                    queue.push([newX, newY]);
                }
            }
        }
        steps++;
    }

    return -1;
}