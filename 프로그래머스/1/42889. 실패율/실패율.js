function solution(N, stages) {
    
    const getFail = (step) => {
        let dozunCount = 0;
        let failCount = 0;
        
        for(let i=0; i<stages.length; i++){
            let stage = stages[i]
            if(step<=stage){
                failCount++;
            }
            if(step<stage){
                dozunCount++;
            }
        }
        return failCount/dozunCount
    }

    const map = new Map()
    for(let i=1; i<=N; i++){
        const fail = getFail(i)
        map.set(i,fail)
    }
    

    return Array.from(map).sort((a,b)=>{
        if(a[0] === b[0]) return a[0] - b[0]
        return b[1] - a[1]
    }).map(e=>e[0])
    
}