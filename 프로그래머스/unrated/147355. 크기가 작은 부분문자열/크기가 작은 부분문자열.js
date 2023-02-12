function solution(t, p) {
    const pArr = [...p].map(e=>Number(e))
    const tArr = [...t].map(e=>Number(e))
    const pLen = pArr.length
    const pFirstIdx = pArr[0]
    
    let count = 0
    for(let i=0; i<=tArr.length-pLen; i++){
        if(tArr[i] <= pFirstIdx) {
            let Arr = []
            for(let j=0; j<pLen; j++){
                 Arr.push(tArr[i+j])
            }
            if(Arr.join("")*1 <= p*1){
                count +=1
            }
        }
    }
    return count
}