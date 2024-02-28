// Asteroid Collision
// Solved
// Medium
// Topics
// Companies
// Hint
// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction(positive meaning right, negative meaning left).Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions.If two asteroids meet, the smaller one will explode.If both are the same size, both will explode.Two asteroids moving in the same direction will never meet.



//     Example 1:

// Input: asteroids = [5, 10, -5]
// Output: [5, 10]
// Explanation: The 10 and - 5 collide resulting in 10. The 5 and 10 never collide.
//     Example 2:

// Input: asteroids = [8, -8]
// Output: []
// Explanation: The 8 and - 8 collide exploding each other.
//     Example 3:

// Input: asteroids = [10, 2, -5]
// Output: [10]
// Explanation: The 2 and - 5 collide resulting in -5. The 10 and - 5 collide resulting in 10.
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];
    for (const asteroid of asteroids) {
        if (asteroid > 0 || stack.length === 0) {
            stack.push(asteroid);
        } else {
            while (true) {
                const prev = stack[stack.length - 1];
                if (prev < 0) {
                    stack.push(asteroid);
                    break;
                } else if (prev === -asteroid) {
                    stack.pop();
                    break;
                } else if (prev > -asteroid) {
                    break;
                } else {
                    stack.pop();
                    if (stack.length === 0) {
                        stack.push(asteroid);
                        break;
                    }
                }
            }
        }
    }
    return stack;
}