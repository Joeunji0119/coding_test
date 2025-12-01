function solution(strArr) {
    return strArr.map((e,index)=> index%2===0? e.toLowerCase() : e.toUpperCase())
}