function solution(numer1, denom1, numer2, denom2) {
    let gcd = 1;
    const handleGcd = (arr) => {
        for(let i=0; i<=arr[1]; i++){
            if(arr[0]%i ===0 && arr[1]%i ===0){
                gcd = i
            }
        }
        return gcd
    }
    
    let arr = [denom2*numer1 + denom1*numer2, denom1*denom2]
    const gcdNum = handleGcd(arr)
    return arr[0]%arr[1] === 0 && arr[1] !== 1 ? [arr[0]/arr[1], 1] : [arr[0]/gcdNum, arr[1]/gcdNum]
}