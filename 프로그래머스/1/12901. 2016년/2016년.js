const DAYS = ['FRI','SAT','SUN','MON','TUE','WED','THU']
const LAST_DATE = [31,29,31,30,31,30,31,31,30,31,30,31]


function solution(a, b) {
    let totalDate = 0;
    for(let i=1; i<a; i++){
        totalDate = totalDate + LAST_DATE[i-1]
    }
    totalDate = totalDate + b-1
    
    return DAYS[totalDate%7]
}