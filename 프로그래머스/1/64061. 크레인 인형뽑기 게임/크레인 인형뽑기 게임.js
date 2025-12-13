function solution(board, moves) {
    let arr = []
    let count = 0;
    
    for(let i=0; i<moves.length; i++){
        const move = moves[i]
        
        for(let j=0; j<board.length; j++){
            let target = board[j][move -1]
            if(target !==0){
                 board[j][move-1] = 0
                if(arr[arr.length-1] === target){
                    arr.pop()
                    count = count+2
                } else { arr.push(target) }
                break;
            }
        }
    }
    return count
}