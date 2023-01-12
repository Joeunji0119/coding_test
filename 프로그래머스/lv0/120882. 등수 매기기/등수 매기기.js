function solution(score) {
    let arr = score.map(x=>(x[0]+x[1])/2)
    let sorted = arr.slice().sort((a,b)=>b-a)

    return arr.map(x => sorted.indexOf(x) +1)
}