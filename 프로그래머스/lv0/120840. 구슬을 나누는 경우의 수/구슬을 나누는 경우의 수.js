function solution(balls, share) {
    function fac(a){
        let mulNum = BigInt(1)
        for(i=1; i<=a; i++){
            mulNum *=BigInt(i)
        }
        return mulNum
    }
    return fac(balls)/fac((balls-share))/fac(share)
}