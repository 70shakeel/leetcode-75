// Evaluate Division
// Medium
// Topics
// Companies
// Hint
// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries.If a single answer cannot be determined, return -1.0.

//     Note: The input is always valid.You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

//         Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.



//             Example 1:

//     Input: equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
// Output: [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0]
// note: x is undefined => -1.0
// Example 2:

// Input: equations = [["a", "b"], ["b", "c"], ["bc", "cd"]], values = [1.5, 2.5, 5.0], queries = [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]
// Output: [3.75000, 0.40000, 5.00000, 0.20000]
// Example 3:

// Input: equations = [["a", "b"]], values = [0.5], queries = [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]
// Output: [0.50000, 2.00000, -1.00000, -1.00000]
const calcEquation = (equations, values, queries) => {
    const graph = {};

    // Build the graph
    const addEdge = (u, v, val) => {
        if (!graph[u]) graph[u] = [];
        graph[u].push({ node: v, value: val });
    };

    for (let i = 0; i < equations.length; i++) {
        const [u, v] = equations[i];
        const val = values[i];
        addEdge(u, v, val);
        addEdge(v, u, 1 / val);
    }

    // Perform DFS to find the path between variables
    const dfs = (start, end, visited) => {
        if (!graph[start]) return -1.0;
        if (start === end) return 1.0;

        visited.add(start);
        for (const neighbor of graph[start]) {
            if (!visited.has(neighbor.node)) {
                const result = dfs(neighbor.node, end, visited);
                if (result !== -1.0) {
                    return neighbor.value * result;
                }
            }
        }

        return -1.0;
    };

    // Calculate the result for each query
    const results = [];
    for (const [u, v] of queries) {
        results.push(dfs(u, v, new Set()));
    }

    return results;
};
