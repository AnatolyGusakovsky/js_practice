/*
Example
matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )
// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]
*/

function matrix_addition(matrix_a, matrix_b) {
  let result_matrix = matrix_a.slice()
  for (let i = 0; i < matrix_a.length; i++) {
    for (let j = 0; j < matrix_a.length; j++) {
      result_matrix[i][j] = matrix_a[i][j] + matrix_b[i][j]
    }
  }
  return result_matrix
}

console.log(matrix_addition([ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ]))