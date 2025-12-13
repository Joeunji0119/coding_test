function solution(keymap, targets) {
    
    const getFindIndex = (s) => {
        const index = keymap.reduce((a,c)=> {
            const index = c.indexOf(s)
            if(index < a && index !== -1){
                a = index
            }
            return a
        },100)

        return index === 100 ? -1: index
    }
    
    
    return targets.map((arr)=>{
        let sum = 0;
        for(let i=0; i<arr.length; i++){
            const index = getFindIndex(arr[i])
            if(index === -1) return sum = -1
            sum = sum + index+1
        }
        return sum 
    })
}