function solution(numbers) {
    var answer = 0;
    for(let i=0; i<numbers.length; i++){
        answer += numbers[i]
    }
    var answers = answer / numbers.length
    return answers;
}