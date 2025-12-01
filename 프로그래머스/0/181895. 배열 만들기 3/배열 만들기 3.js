function solution(arr, intervals) {
    const [a,b] = intervals;
    

    
    let c = arr.slice(a[0],a[1] +1)

    return c.concat(arr.slice(b[0],b[1] +1))
    
}