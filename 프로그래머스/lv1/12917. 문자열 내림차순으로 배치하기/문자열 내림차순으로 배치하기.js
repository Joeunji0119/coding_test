function solution(s) {
    const letter = [...s]
    const upperCase = letter.filter(x=> x === x.toUpperCase()).sort()
    const lowerCase = letter.filter(x=> x !== x.toUpperCase()).sort()
 
    return upperCase.concat(lowerCase).reverse().join("")
}