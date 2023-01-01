function solution(sizes) {
    const answer = sizes.map(x=> x.sort((a, b) => a-b))
    
    let a = []
    let b = []
    
    for(let i=0; i<answer.length; i++){
        a.push(answer[i][1])
        b.push(answer[i][0])
    }
    
    return Math.max(...a) *  Math.max(...b)
}