function solution(k, score) {
    let result = [];
    
    for(let i=0; i<score.length; i++){
        let slide = score.slice(0,i+1).sort((a,b)=>b-a).slice(0,k)
        result.push(Math.min(...(slide)))
    }
    return result
}