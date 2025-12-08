function solution(babbling) {
    const word = ["aya", "ye", "woo", "ma"]
    
    let count = 0;

    for(let i=0; i<babbling.length; i++){
        const ba = babbling[i]
        let word = new Set(["aya", "ye", "woo", "ma"])
        let s = ""
        let prev = ""
        
        for(let j=0; j<ba.length; j++){
            s = s + ba[j]
            if(word.has(s) && prev !== s){
                prev = s
                s = ""
                if(j === ba.length-1){
                    count ++
                }
            } 
        }
    }
    return count
}