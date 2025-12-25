const convertMin = (time) => {
    const [m,s] = time.split(":")
    return Number(m)*60 + Number(s)
}

const convertTime = (number) => {
    const time = String(Math.floor(number/60)).padStart(2,'0')
    const min = String(number%60).padStart(2,"0")
    return `${time}:${min}`
}


function solution(video_len, pos, op_start, op_end, commands) {
    const len = convertMin(video_len)
    const start = convertMin(pos)
    const opStart = convertMin(op_start)
    const opEnd = convertMin(op_end)
    
    let timeLine = start
    
    if(timeLine >= opStart && timeLine<=opEnd){
        timeLine = opEnd;
    }
    
    for(let i=0; i<commands.length; i++){
        const order = commands[i]
        
        if(order === "next"){
            timeLine = timeLine + 10
            
            if(timeLine > len) { timeLine = len; } 
            if(timeLine >= opStart && timeLine <=opEnd){
                timeLine = opEnd; 
            }
        }
        if(order === "prev"){
            timeLine = timeLine - 10
            if(timeLine < 0) { timeLine = 0; } 
            if(timeLine >= opStart && timeLine <=opEnd){
                timeLine = opEnd; continue;
            }
        }
    }
    
    return convertTime(timeLine)
    
}