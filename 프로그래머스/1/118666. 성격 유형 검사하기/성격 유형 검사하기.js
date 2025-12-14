const makeScore = (key, num,map) => {
    let A = key[0]
    let N = key[1]
    
    if(num === 1) return map.set(A,map.get(A) +3)
    if(num === 2) return map.set(A,map.get(A) +2)
    if(num === 3) return map.set(A,map.get(A) +1)
    if(num === 4) return map
    if(num === 5) return map.set(N,map.get(N) +1)
    if(num === 6) return map.set(N,map.get(N) +2)
    if(num === 7) return map.set(N,map.get(N) +3)
}

function solution(survey, choices) {
    const map = new Map()
    
    map.set('R',0)
    map.set('T',0)
    map.set('C',0)
    map.set('F',0)
    map.set('J',0)
    map.set('M',0)
    map.set('A',0)
    map.set('N',0)
    
    for(let i=0; i<choices.length; i++){
        makeScore(survey[i], choices[i],map)
    }
    
    const getMbti = (map,a,b) => {
        let aValue = map.get(a)
        let bValue = map.get(b)
        
        if(aValue === bValue) return [a,b].sort()[0]
        
        if(aValue>bValue) return a
        return b
    }
    
    const m = getMbti(map,"R","T")
    const b = getMbti(map,"C","F")
    const t = getMbti(map,"J","M")
    const i = getMbti(map,"A","N")
    
    return m + b + t + i
}