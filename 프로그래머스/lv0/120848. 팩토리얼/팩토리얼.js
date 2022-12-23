function solution(num) {
    let answer = 1
    let i = 0
    while(answer <= num){
        i++
        answer = answer*i
    }
    return i-1
}