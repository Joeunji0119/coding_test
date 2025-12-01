function solution(number) {
return Array.from(number).reduce((a,c)=> a + Number(c),0) %9
}