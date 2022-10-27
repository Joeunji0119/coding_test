function solution(array) {
    const answer = []
    const Max = Math.max(...array)
    const Index = array.indexOf(Max)
    answer.push(Max,Index)
    return answer;
}