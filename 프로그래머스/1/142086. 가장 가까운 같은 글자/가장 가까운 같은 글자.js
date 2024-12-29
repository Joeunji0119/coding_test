function solution(s) {
    let stack = [];
    let result = [];
    
    s = Array.from(s)
    
    const findLastIndex = (arr, el) => {
        let result;
        for (let i= arr.length-1; i=>0; i--){
            if(arr[i] === el){
                result = i;
                return i
            }
        }
        return result 
    }
    
    for(let i=0; i<s.length; i++){
        if(stack.length>0 && stack.includes(s[i])){
          
            let arr = s.slice(0, i)
            let index = i - findLastIndex(arr, s[i])
            result.push(index)
        }
        else {
            stack.push(s[i])
            result.push(-1)
        }
    
}
    
    return result;
}
