function maxDistinctElements(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)

    let current = -Infinity
    let count = 0

    for (let num of nums) {
        let low = num - k
        let high = num + k

        let candidate = Math.max(low, current)

        if (candidate <= high) {
            count++
            current = candidate + 1
        }
    }

    return count
}