module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) return [];

  return matrix.reduce((result, row, index) => {
    if (index % 2 === 0) {
      return result.concat(row);
    }
    return result.concat(row.slice().reverse());
  }, []);
};
