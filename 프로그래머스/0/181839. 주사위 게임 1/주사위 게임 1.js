function solution(a, b) {
    const aOdd = a%2 !== 0
    const bOdd = b%2 !== 0
    
    if(aOdd && bOdd) return a**2 + b**2
    if(aOdd || bOdd) return 2*(a+b)
    return Math.abs(a-b)
}