/* This JavaScript script applies Dijkstra's algorithm to discover the shortest paths in a weighted graph represented by a matrix.
 It prompts the user to input a starting node, then employs Dijkstra's algorithm to compute and showcase the shortest distances to 
 all other nodes in the graph. The results are thoughtfully presented in the console. While the structure of the adjacency matrix 
 remains constant, the script offers user interaction by allowing the insertion of the starting node.*/



// Function to apply Dijkstra's algorithm
function dijkstraAlgorithm(adjMatrix, startNode) {
    const numNodes = adjMatrix.length;                        // Get the number of nodes in the graph, which is equal to the length of the adjacency matrix
  
    // Initialize arrays to store distances and visited nodes
    const distance = new Array(numNodes).fill(Infinity);      // Initialize distance array with infinite values
    const visited = new Array(numNodes).fill(false);          // Initialize visited array with false values
  
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
    for (let i = 0; i < numNodes; i++) {                        //for loop to iterate over the sequence of distances from nodes
      console.log("To node " + i + ": " + distance[i]);
    }
  }
  
  // Function to find the unvisited node with the minimum distance ( returns -1 when no unvisited node is found )
  function findMinDistanceNode(distance, visited) {     // distance = array to store current shortest distances; //visited = array that keeps track of whether each node has been visited or not
    let minDistance = Infinity;       //initially set to infinity to represent the largest distance
    let minDistanceNode = -1;         //set to -1 to represent an invalid node index
    
    //The function loops through each node
    for (let i = 0; i < distance.length; i++) {
    // If node has been visited and its distance to the set node is less than the minimum distance, it updates 'minDistance' and 'minDistanceNode' to the values of the current node
      if (!visited[i] && distance[i] < minDistance) {   
        minDistance = distance[i];
        minDistanceNode = i;
      }
    }
  
    return minDistanceNode;
  }
  
  // Example of 9x9 adjancency matrix with pre-defined arrays of values
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
  