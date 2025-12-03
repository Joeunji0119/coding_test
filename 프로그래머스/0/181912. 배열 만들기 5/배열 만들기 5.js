function solution(intStrs, k, s, l) {
    return intStrs.map((e)=> Number(e.split('').slice(s,s+l).join(''))).filter(v=>v>k)
}