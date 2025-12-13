function solution(s) {
    let xCount = 0;
    let yCount = 0;
    let x = ""
    let result = 0;
    
    for(let i=0; i<s.length; i++){
        if(x === "") {
            x = s[i]
            xCount = 1;
            continue;
        }
        if(s[i] === x){
            xCount++;
        } else {
            yCount ++;
        }
        
        if(xCount === yCount){
            result++
            x = ""
            xCount = 0;
            yCount = 0;
        }
    }
    
        if(x !== ""){
            result++
        }

    return result
}