
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){return []};
  var length = matrix.length;
  var matrix_r=[];
  for (i=0;i<length;i++) {
    if (i%2==1){matrix_r.push(matrix[i].reverse())}
    else {matrix_r.push(matrix[i])}
  }
  var merged = [].concat.apply([],matrix_r);
  return merged;
}
