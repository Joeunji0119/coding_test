function solution(n) {
    const func =(arr, n)=> {
        if(n ===1) return arr;
        
        const isOdd = n%2 === 0
        if(isOdd){n=n/2}
        else n = n*3 +1
        
        arr.push(n)
        
        return func(arr,n)
    }
    
    return func([n],n)

}