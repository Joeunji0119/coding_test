function solution(x) {
    const xArr = [...(x+"")].map(x=>Number(x))
    return x % xArr.reduce((a,b)=>a+b) === 0
}