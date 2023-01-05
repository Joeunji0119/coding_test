function solution(a, b) {
    if(a==b) return a
    const sort = [a,b].sort((a,b)=>a-b)
    const len = sort[1]-sort[0]+1
    let count = 0
    for(let i=sort[0]; i<=sort[1];i++){
        count += i
    }
    return count
}