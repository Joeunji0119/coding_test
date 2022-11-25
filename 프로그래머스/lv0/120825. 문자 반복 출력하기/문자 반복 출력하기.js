const solution = (my_string, n) => {
    const Arr = [...my_string]
    const answer = []
    for (i=0; i<Arr.length; i++){
        answer.push(Arr[i].repeat(n))
    }
    return answer.join("")
}