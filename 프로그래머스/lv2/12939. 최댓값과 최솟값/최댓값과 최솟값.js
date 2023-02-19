function solution(s) {
    const arr = s.split(" ").map(x=>Number(x))
    const answer = [Math.min(...arr),Math.max(...arr)]
                  
    return answer.join(" ")
}