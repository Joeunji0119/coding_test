const solution = (my_string) => {
    const stringArr = [...my_string]
    const toLowerArr = stringArr.map((x)=>x.toLowerCase())
    const answer = toLowerArr.sort()
    return answer.join("")
}