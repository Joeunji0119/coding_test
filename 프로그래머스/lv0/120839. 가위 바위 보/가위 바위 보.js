const solution = (rsp) => {
    const array = [...rsp]
    const Arr = array.map((x)=>Number(x))
    const answer = []
    
    for(let i=0; i<Arr.length; i++){
        Arr[i] === 2 ? answer.push(0) : Arr[i] === 0 ? answer.push(5) : answer.push(2)
    }
    return answer.join("")
}