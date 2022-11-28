

const solution = (n) => {
    
    const arr = []
    const answer = []
    for (i=1; i<=n; i++){
        if(n%i === 0) 
        {
            arr.push(i)
        }
    }
    

    return arr.length
}