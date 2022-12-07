const solution = (numbers) => {
    const answerArr = []
    const sortArr = numbers.sort((a,b) => b-a)
    answerArr.push(sortArr[0]*sortArr[1])
    answerArr.push(sortArr[sortArr.length-1]*sortArr[sortArr.length-2])
    const answer = Math.max(...answerArr)
    
    return answer
}