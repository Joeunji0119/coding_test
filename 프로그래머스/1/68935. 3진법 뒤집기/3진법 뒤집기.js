function solution(n) {
    let a = n.toString(3)
    let b = a.split('').reverse().join('')
    let c = parseInt(b,3)
    return c
}