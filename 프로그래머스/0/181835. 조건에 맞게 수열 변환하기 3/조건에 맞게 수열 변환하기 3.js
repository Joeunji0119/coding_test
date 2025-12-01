function solution(arr, k) {
    if(k %2 !==0) {
        return arr.map((e)=>e*k)
    }
    return arr.map((e)=>e+k)
}
