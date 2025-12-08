let func = (num) => {
    if(num <2) return false
    if(num === 2) return true;
    if(num%2 === 0) return false;

    for(let i=3; i<=Math.sqrt(num); i+=2){
        if(num%i === 0) return false
    }
    return true;
}


function solution(n) {
    const area = Array.from({length: n},(_,i)=>i+1)
    return area.reduce((a,c)=> {
        if(func(c)){
            a++
        }
        return a
    },0)
    
}