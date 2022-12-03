const solution = (cipher, code) => {
    const answer = []
    const textArray = [...cipher]
    for(let i=1; i<=textArray.length; i++ ){
        i%code === 0 ? answer.push(textArray[i-1]) : ""
    }
    return answer.join("")
}