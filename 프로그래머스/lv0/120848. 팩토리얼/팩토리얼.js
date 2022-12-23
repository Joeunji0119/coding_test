function solution(num) {
    if(num === 1){
        return 1
    }
    if(num ===2){
        return 2
    }
    let div = 1
    const Arr = []
    for(let i=1; i<num; i++){
        div = div*i
        if(div<=num){
            Arr.push(i)
        }
        if(div>num){
            break
        }
    }
    return Arr[Arr.length-1]
}