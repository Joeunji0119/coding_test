function solution(numbers) {
    let result = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let k=i+1; k<numbers.length; k++){
            let a = numbers[i]+numbers[k];
            if(!result.includes(a)){result.push(a)}
        }
    }
    
    return result.sort((a,b)=>a-b)
}