function solution(A, B) {
    const a = [...A]
     const len = A.length
    
    if(a.join("") === B || len === 1){
        return 0
    }
    
    let count = 0
    for(let i=len-1; i>=0; i--){
        a.unshift(a[len-1])
        a.pop()
        count +=1

        if(a.join("") === B){
            return count
        }
        if(i===0 && a.join("") !== B){
            return -1
        }
    }

}


