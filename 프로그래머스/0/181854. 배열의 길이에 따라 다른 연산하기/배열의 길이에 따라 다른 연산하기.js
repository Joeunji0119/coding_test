function solution(arr, n) {
    const isOdd = arr.length %2 !==0
    if(isOdd){
        return arr.map((e,index)=>index%2===0?e+n :e)
    }
     return arr.map((e,index)=>index%2!==0?e+n :e)                               
}