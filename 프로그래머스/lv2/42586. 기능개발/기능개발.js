function solution(progresses, speeds) {
    
    let func;
    let count = 1
    let answer = []
    
    for(let i=0; i<speeds.length; i++){
        
        if(func !== undefined){
            if(func < Math.ceil((100-progresses[i])/speeds[i])){
                answer.push(count)
                count = 1
                func = Math.ceil((100-progresses[i])/speeds[i])
            } else {
              count += 1;
            }
            if(speeds.length-1 === i) answer.push(count)
        }
        
        if (func === undefined){
            func = Math.ceil((100-progresses[i])/speeds[i])
        }
    }
    return answer
}