function solution(array, height) {
    var answer = array.filter(taller => taller > height);
    return answer.length;
}