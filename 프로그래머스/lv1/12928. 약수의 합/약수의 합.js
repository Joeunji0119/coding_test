function solution(n) {
    const arr = [] 
   for(let i=1; i<=n; i++){
       n%i === 0 ? arr.push(i) : ""
   }
    console.log(arr)
    // return answer;
}