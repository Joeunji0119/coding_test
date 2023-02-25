function solution(array, commands) {
    let arr = []
    for(let i=0; i<commands.length; i++){
        let start = commands[i][0] === 0 ? 0 : commands[i][0]-1
        let s = array.slice(start, commands[i][1]).sort((a,b)=>a-b)
        arr.push(s[commands[i][2]-1])
    }
    return arr;
}