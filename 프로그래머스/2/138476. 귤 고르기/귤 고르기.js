function solution(k, tangerine) {
    let obj = {}
    
    for(let i=0; i<tangerine.length; i++){
        obj[tangerine[i]] =(obj[tangerine[i]] || 0) + 1
    }
    
    

    const result = Object.values(obj).sort((a,b)=> b - a)
    
    
    let counts = 0;
    let results = 0;
    
    for(let i=0; i<result.length; i++){
        
        counts += result[i]
        results += 1
        if(counts >= k){
            return results
        }
    }
    
    return results;
}