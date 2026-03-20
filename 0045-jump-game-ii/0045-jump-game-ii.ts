
function checkIndex(nums: number[]): number {
    if(nums.length ==0) return 0;
    for(let i =0; i<nums.length;i++){
        if(i+nums[i] >= nums.length) return i
    }
    return length;
}
function jump(nums: number[]): number {
    let step =0
    let minIndex =nums.length-1;
    while(minIndex!=0){
        minIndex = checkIndex(nums.slice(0,minIndex))
        step++
    }
    return step;    
};