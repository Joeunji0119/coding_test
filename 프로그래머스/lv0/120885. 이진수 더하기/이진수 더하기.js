const solution = (bin1, bin2) => {
    function translate(bin){
    if (bin !=="0"){
        const Arr = []
        const bin1Arr = [...bin].reverse()

        for (let i=0; i<bin1Arr.length; i++){
            bin1Arr[i] === "1" ? Arr.push(i) : Arr.push("a")
        }

        const map = Arr.map(x=> Math.pow(2,x))
        const filter = map.filter(x=> Number(x))
        const result = filter.reduce((a,b)=>a+b)

        return Number(result)
        }
        return 0
    }

    const sum = translate(bin1) + translate(bin2)
    
    return sum.toString(2);
    
}