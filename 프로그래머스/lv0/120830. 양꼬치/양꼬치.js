function solution(n, k) {
    if(n>=10){
        var i = Math.floor(n/10)
        var answer = n*12000 + (k-i)*2000
    } else {
        return answer = n*12000 + k*2000
    }
    return answer;
}