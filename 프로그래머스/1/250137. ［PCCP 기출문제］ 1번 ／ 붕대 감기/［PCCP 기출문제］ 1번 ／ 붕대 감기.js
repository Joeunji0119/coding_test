function solution(bandage, health, attacks) {
    const [useTime, recoverTime, addRecoverTime] = bandage;
    
    let p = health;
    let addCount = 0;

    const attckTime = attacks[attacks.length-1][0]
    
    for(let i=1; i<=attckTime; i++){
        
        if(p<1){return -1}
        
        const attckTiming = attacks.find(([t,a])=> t === i)
        
        if(!attckTiming){
            addCount++;
             p = p+recoverTime >health ? health :p+recoverTime
            if(addCount ===useTime) {
                addCount = 0;
                p = p+addRecoverTime >health ? health :p+addRecoverTime
            }
        } else {
            addCount = 0;
            p = p-attckTiming[1]
        }
    }
    
    return p>0 ? p : -1
}