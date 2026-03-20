function getHappyString(n: number, k: number): string {
    const chars = ['a', 'b', 'c']
    const numOfHappyStrings = 3 * 2 ** (n - 1)
    if(k> numOfHappyStrings) return ""
    let count = 0;
    let result = null
    function kThString(happyString : string) {
        if(happyString.length == n) {
            count ++;
            if(count == k) {
                result = happyString;
            }
            return;
        }
        for(let char of chars) {
            if(happyString[happyString.length - 1] == char) continue;
            if(result) return
            kThString(happyString + char);
        }
    }
    kThString('')
    return result;
};