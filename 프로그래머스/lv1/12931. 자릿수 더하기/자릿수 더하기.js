function solution(n){
    const num = String(n).split("").map(x=>Number(x)).reduce((a,b)=>a+b)
    return num
}