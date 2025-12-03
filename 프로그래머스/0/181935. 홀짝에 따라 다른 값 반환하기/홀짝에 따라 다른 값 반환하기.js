function solution(n) {
    const isEven = n%2 === 0
    return Array.from({length:n}).reduce((acc,_,index)=>{
        if(!isEven && (index+1)%2 !==0) { acc = acc + index+1 }
        if(isEven && (index+1)%2 ==0) {  acc = acc + (index +1)**2 }
        return acc
    },0)
}