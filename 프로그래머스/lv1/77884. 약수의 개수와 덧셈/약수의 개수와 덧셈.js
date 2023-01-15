function solution(left, right) {
    if(left===1 && right === 2) return 1
    const numCount = (num) => {
        let cnt = 1;
        for(let i=1; i<num; i++){
            if(num%i === 0){
                cnt +=1
            }
        }
        return cnt
    }
    let count = 0;
    for(let j=left; j<=right; j++){
            numCount(j)%2 === 0 ? count +=j : count -=j
    }
    return count
}