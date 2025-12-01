function solution(numbers, n) {
    return numbers.reduce((a,c)=> {
        if(a <= n) {
            a = a + c
        }
        return a
    } ,0)
}