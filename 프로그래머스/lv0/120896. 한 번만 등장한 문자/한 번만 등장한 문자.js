const solution = (s) => {
    const answer = []
    const Arr =  [...s].sort()
    Arr.map((i) => {if (s.indexOf(i) === s.lastIndexOf(i)){answer.push(i)}})
    
    return answer.join("")
}