function solution(num, total) {
    const divi = Math.floor(num/2)
    const middleNum = Math.ceil(total/num)
    const startNum = middleNum - divi
    return Array.from({length :num},(_,i)=>i+startNum)
}