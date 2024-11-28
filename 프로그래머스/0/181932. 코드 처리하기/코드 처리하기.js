function solution(code) {
    let ret = [];
    let mode = 0;
    
    for(let i=0; i <code.length; i++){
        if(!mode){
            if(code[i] !=="1" && i%2 === 0) {
                ret.push(code[i])
            }
            else if(code[i] ==="1"){
                mode = 1
            }
        } 
        else {
            if(code[i] !=="1" && i%2 === 1) {
                ret.push(code[i])
            }
            else if(code[i] ==="1"){
                mode = 0
            }
        }

    }
    
    return !ret.join("") ? "EMPTY" : ret.join("")
}