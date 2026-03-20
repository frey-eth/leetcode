function minAbsDiff(grid: number[][], k: number): number[][] {
  const   m = grid.length;
  const n = grid[0].length;
  const result: number[][] = [];
  for (let i = 0; i <= m - k; i++) {
    const row: number[] = [];
    for (let j = 0; j <= n - k; j++) {
      const values: number[] = [];
      for (let x = i; x < i + k; x++) {
        for (let y = j; y < j + k; y++) {
          values.push(grid[x][y]);
        }
      }
      const unique = Array.from(new Set(values));
      if (unique.length <= 1) {
        row.push(0);
        continue;
      }

      unique.sort((a, b) => a - b);

      let minDiff = Infinity;
      for (let t = 1; t < unique.length; t++) {
        minDiff = Math.min(minDiff, unique[t] - unique[t - 1]);
      }

      row.push(minDiff);
    }
    result.push(row);
  }
  return result;
};