function solution(n) {

    function fibo(n) {
        if (n <= 1) return n; 
    
        let a = 0, b = 1;
        for (let i=2; i<=n; i++) {
            [a, b] = [b, (a + b) % 1234567];
        }
        
        return b;
    }
    
    return fibo(n) 
    
}