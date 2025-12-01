function solution(myString, pat) {
    const reverse = myString.split("").map(e => e==='A' ? 'B' :"A").join("")
    
    return reverse.includes(pat) ? 1: 0
    
}