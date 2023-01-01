function solution(s){
    const string = [...s.toLowerCase()]
    
    let p = 0;
    let y = 0;
    
    for (let i=0; i<string.length; i++){
        string[i] === "p" ?  p += 1 : string[i] === "y" ? y += 1 : ""
    }
    
    const answer = p === y
    
    return answer
}