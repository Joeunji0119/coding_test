const getMap = (s) => {
    let map = new Map();
    
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){ map.set(s[i], map.get(s[i])+1)}
        else { map.set(s[i],1) }
    }
    
    return map
}

function solution(X, Y) {
    const xMap = getMap(X)
    const yMap = getMap(Y)
    let result = ""
    let arr = ['9','8','7','6','5','4','3','2','1','0']
    for(let i=0; i<arr.length; i++){
        if(xMap.has(arr[i]) && yMap.has(arr[i])){
            const repeatCount = Math.min(xMap.get(arr[i]), yMap.get(arr[i]))
            result = result + arr[i].repeat(repeatCount)
        } 
    }
    if(result === "") return "-1"
    if(result[0] === "0") return "0"
    return result
}