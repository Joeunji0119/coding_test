const solution = (numbers) => {
    const answerArr = []
    const sortArr = numbers.sort((a,b) => b-a)
    
    const first = sortArr[0]*sortArr[1]
    const second = sortArr[sortArr.length-1]*sortArr[sortArr.length-2]
    
    return first > second ? first : second
}