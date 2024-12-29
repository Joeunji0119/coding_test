function solution(d, budget) {
    const sort = d.sort((a,b)=>a-b)
    let count=0;
    let sum =0;
    console.log(sort)
    for(let i=0; i<sort.length; i++){
        if(sum < budget){
            sum += sort[i]
            count +=1
            
            if(sum > budget){
                count -=1
            }
        } else {
            return count
        }
    }
    return count;
}
