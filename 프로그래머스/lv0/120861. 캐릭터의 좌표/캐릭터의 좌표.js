function solution(keyinput, board) {
    const boardLimit = board.map(x=>Math.floor(x/2))

    let x = 0;
    let y = 0;
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === "left" && x > -boardLimit[0] ){
            x = x-1;
        }
        if(keyinput[i] === "right" && x <boardLimit[0]){
            x = x+1;
        }
        if(keyinput[i] === "up" && y <boardLimit[1]){
            y = y+1;
        }
        if(keyinput[i] === "down" && y > -boardLimit[1]){
            y = y-1;
        } 
    }
    return [x,y]
}
