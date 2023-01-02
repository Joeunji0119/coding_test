function solution(arr) {
   if(arr.length === 1){
       return [-1]
   }
    const a = Math.min(...arr);
    return arr.filter(x=> x !==a)
}