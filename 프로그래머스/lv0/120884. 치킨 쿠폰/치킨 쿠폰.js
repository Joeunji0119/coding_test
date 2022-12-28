function solution(chicken) {
    let Arr = [] // 몫
    let Arr2 = [] // 나머지

    const self = (chicken) => {
        
        if (chicken < 10) {
             const ArrSum = Arr.reduce((a,b)=>a+b)
             console.log(Number(ArrSum)
             const Arr2Sum = Arr2.reduce((a,b)=>a+b)
            if(Arr2 >= 9){
                if(Arr2%10 === 9){
                    return ArrSum.join("") +  Math.floor(Arr2/10) + 1
                }
                if(Arr2%10 < 9){
                    return Arr2Sum.join("") + Math.floor(Arr2/10)
                }
            }
            return Arr.join("")
        }
        
        if(chicken >= 10){
            let a = Math.floor(chicken/10)
            let b = chicken%10
            Arr.push(a)
            Arr2.push(b)
            return self(a)
          }
    }
    
    if (chicken < 10){
        return 0
    }
    if(chicken === 10){
        return 1
    }
    if(chicken>10){
        return self(chicken)
    }
}