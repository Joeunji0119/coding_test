function solution(myString) {
    return myString.split('x').filter(e=>e).sort((a,b)=>a.localeCompare(b))
}