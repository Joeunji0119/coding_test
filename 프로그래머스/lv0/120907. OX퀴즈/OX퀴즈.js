function solution(quiz) {
    return quiz.map(e=>{
        const [문제,답] = e.split("=")
        return eval(문제) === 답*1 ? "O" : "X"
    })
}