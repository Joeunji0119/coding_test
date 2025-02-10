function solution(s) {
    
    if(s[0] === "-") return Number([...s].splice(1,s.length-1).join(""))*-1
    else return Number(s)
}