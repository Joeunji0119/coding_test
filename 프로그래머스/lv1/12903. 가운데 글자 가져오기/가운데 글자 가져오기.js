function solution(s) {
    const len = s.length
    if(len % 2 === 1){
        return s[Math.floor(len/2)]
    }
    if(len %2 === 0){
        return s[len/2 -1] + s[len/2]
    }
}