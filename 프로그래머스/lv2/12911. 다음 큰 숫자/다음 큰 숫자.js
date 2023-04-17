function solution(n) {
    let hex = [...n.toString(2)]
    let count = 0;
    hex.map(x=> x==="1" ? count +=1 : "");
    
    let minCount = 0;
    let i = n+1;
    
    while(true){
        let min = [...i.toString(2)]
        min.filter(x=> x==="1" ? minCount +=1 : "")
        
        if (count === minCount){
            break;
        }
        minCount = 0
        i+=1
    }
    return i
}