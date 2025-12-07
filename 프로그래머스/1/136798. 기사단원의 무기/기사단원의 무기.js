const divisorsCount = (num) => {
    let count = 0;
    for(let i=1; i*i<=num; i++){
        if(num%i===0){
            count ++
            if(i*i !== num){
                count ++
            }
        }
    }
    return count;
}

function solution(number, limit, power) {
    const arr = Array.from(({length:number}),(_,i)=>i+1)
    console.log(arr)
    
    return arr.reduce((a,c)=>{
        let d = divisorsCount(c)
        if(d>limit) {
            a = a + power
        } else {
            a = a + d
        }
        return a
    },0)
}