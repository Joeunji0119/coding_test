function solution(n) {
    var str = String(n)
    var mapfn = (arg) => Number(arg);
    var newArr = Array.from(str, mapfn);
    var answer = newArr.reduce( (a, b) => a + b, 0)
    return answer;
}