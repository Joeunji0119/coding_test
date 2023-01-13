function solution(s) {
    const len = s.length === 4 || s.length === 6
    if ([...s].includes("e")) return false
    return !isNaN(s)&& len
}