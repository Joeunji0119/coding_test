function solution(arr, queries) {
    
    return queries.reduce((a,query)=>{
        const [minIndex,maxIndex,minValue] = query
        let area = arr.slice(minIndex, maxIndex+1)
        let overMinValue = area.filter(e=> e > minValue)
        if(overMinValue.length === 0) {a.push(-1)}
        else a.push(Math.min(...overMinValue))
        
        return a
    },[])

    
}