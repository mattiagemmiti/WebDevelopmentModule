/* This JavaScript script applies Dijkstra's algorithm to discover the shortest paths in a weighted graph represented by a matrix.
 It prompts the user to input a starting node, then employs Dijkstra's algorithm to compute and showcase the shortest distances to 
 all other nodes in the graph. The results are thoughtfully presented in the console. While the structure of the adjacency matrix 
 remains constant, the script offers user interaction by allowing the insertion of the starting node.*/



// Function to apply Dijkstra's algorithm
function dijkstraAlgorithm(adjMatrix, startNode) {
    const numNodes = adjMatrix.length;
  
    // Initialize arrays to store distances and visited nodes
    const distance = new Array(numNodes).fill(Infinity);
    const visited = new Array(numNodes).fill(false);
  
    // Distance from the start node to itself is 0
    distance[startNode] = 0;
  
    // Main loop to iterate through all nodes
    for (let i = 0; i < numNodes - 1; i++) {
      // Find the minimum distance node that has not been visited
      const minDistanceNode = findMinDistanceNode(distance, visited);
  
      // Mark the selected node as visited
      visited[minDistanceNode] = true;
  
      // Update the distance array for neighboring nodes
      for (let j = 0; j < numNodes; j++) {
        if (!visited[j] && adjMatrix[minDistanceNode][j] !== 0) {
          const newDistance = distance[minDistanceNode] + adjMatrix[minDistanceNode][j];
          if (newDistance < distance[j]) {
            distance[j] = newDistance;
          }
        }
      }
    }
  
    // Display the results in the console
    console.log("Shortest distances from node " + startNode + ":");
    for (let i = 0; i < numNodes; i++) {
      console.log("To node " + i + ": " + distance[i]);
    }
  }
  
  // Helper function to find the unvisited node with the minimum distance
  function findMinDistanceNode(distance, visited) {
    let minDistance = Infinity;
    let minDistanceNode = -1;
  
    for (let i = 0; i < distance.length; i++) {
      if (!visited[i] && distance[i] < minDistance) {
        minDistance = distance[i];
        minDistanceNode = i;
      }
    }
  
    return minDistanceNode;
  }
  
  // Example usage with a prompt for simplicity
  const adjacencyMatrix = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
  ];
  
  const startNode = parseInt(prompt("Enter the starting node:"));
  
  // Call the Dijkstra's algorithm function with the provided matrix and starting node
  dijkstraAlgorithm(adjacencyMatrix, startNode);
  