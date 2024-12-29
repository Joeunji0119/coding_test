function solution(n, m) {
    
    const gcd = (a,b) => {
        let r = 1;
        
        while(b != 0){
            r = a % b
            a = b;
            b = r;
        }
        
        return a
    }
    
    const lcm = (a,b)=> {
        return (a*b)/gcd(a,b)
    }
    
    return [gcd(n, m), lcm(n, m)]
}