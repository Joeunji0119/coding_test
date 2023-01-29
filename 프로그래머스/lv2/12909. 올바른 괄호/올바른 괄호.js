function solution(s){
    let count = 0;
    
    for(let i of s){
        if(i === "("){
            count +=1
        } else {
            if(count === 0){
                return false;
            }
            count -=1
        }
    }
    return count === 0
}