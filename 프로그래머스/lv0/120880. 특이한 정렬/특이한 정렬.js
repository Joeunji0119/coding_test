function solution(numlist, n) {
    return numlist.sort((a,b)=>{ 
        let x = Math.abs(a-n)
        let y = Math.abs(b-n)
        if(x === y){
            return b-a
        }
        else {
            return x-y
        }
    })
}