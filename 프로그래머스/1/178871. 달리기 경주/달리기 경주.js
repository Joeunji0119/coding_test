function solution(players, callings) {
    let maps = {};
    for(let i=0;i<players.length;i++){  maps[players[i]] = i}
    
    let result = [...players]
    for(let i=0; i<callings.length; i++){
        const callingName = callings[i]
        const callRank = maps[callingName]
        const passedName = result[callRank-1]
        
        
        result[callRank-1] = callingName
        result[callRank] = passedName
        
        maps[passedName] +=1
        maps[callingName] -=1
    }
    return result
}
