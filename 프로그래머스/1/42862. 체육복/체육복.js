function solution(n, lostb, reserve) {
    let reverseSet = new Set(reserve)
    let count = 0;
    
    const lost = lostb.filter(e=> {
        if(reverseSet.has(e)) { 
            reverseSet.delete(e)
            return false}
        else return true
    }).sort((a,b)=>a-b)
    

    for(let i=0; i<lost.length; i++){
        if(reverseSet.has(lost[i]-1)){
            count ++;
            reverseSet.delete(lost[i]-1)
            continue;
        }
        if(reverseSet.has(lost[i] +1)){
            count ++;
            reverseSet.delete(lost[i] +1)
            continue;
        }
    }
    return n-lost.length+count
}