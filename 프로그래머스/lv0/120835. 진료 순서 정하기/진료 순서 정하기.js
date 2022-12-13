const solution = (emergency) => {
    const answer = []
    const arr = [...emergency]
    const sort = emergency.sort((a,b)=>b-a)
    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]===sort[j]){
                answer.push(j+1)
            }
        }
    }
        return answer
}