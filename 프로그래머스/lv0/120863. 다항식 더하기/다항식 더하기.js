function solution(p) {
    let [x, num] = p.split("+").reduce(([a,b],s)=>{
        if(s.includes("x")){
            return [a + Number(s.trim().replaceAll("x","") || 1),b]
        }
        return [a, b + Number(s)]
    },[0,0])
    
    if(!x && !num) return 0
    if(!x) return `${num}`
    
    x = `${x===1?"":x}x`
    
    if(!num) return x
    
    return `${x} + ${num}`
}
