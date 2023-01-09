function solution(sides) {
    const [a,b] = sides.sort((a,b)=>b-a)
    return 2*b-1
    
}