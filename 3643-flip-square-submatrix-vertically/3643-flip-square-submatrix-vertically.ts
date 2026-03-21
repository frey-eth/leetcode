function reverseSubmatrix(grid, x, y, k) {
    for (let i = 0; i < Math.floor(k/2); i++) {
        for(let j=y; j < y+k; j++) {
            const flag = grid[x+i][j]
            grid[x+i][j] = grid[x+k-i-1][j]
            grid[x+k-i-1][j] = flag
        }
    }
    return grid
};