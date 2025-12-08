function solution(k, m, score) {
    
    return score.sort((a,b)=>b-a).reduce((a,c,i)=>{
        if((i+1)%m === 0){
            a = a + c*m
        }
        return a
    },0)
}