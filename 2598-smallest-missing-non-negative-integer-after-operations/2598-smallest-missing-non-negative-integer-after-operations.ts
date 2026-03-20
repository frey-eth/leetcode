function findSmallestInteger(nums, value) {
    const count = new Map()

    for (let num of nums) {
        let r = ((num % value) + value) % value
        count.set(r, (count.get(r) || 0) + 1)
    }
    let i = 0

    while (true) {
        let r = i % value
        if ((count.get(r) || 0) === 0) {
            return i
        }
        count.set(r, count.get(r) - 1)
        i++
    }
}