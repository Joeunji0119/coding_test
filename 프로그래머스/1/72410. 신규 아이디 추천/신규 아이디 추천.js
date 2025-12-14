let ABC = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])

function solution(new_id) {
    new_id = new_id.toLocaleLowerCase()
    new_id = [...new_id].filter((e,i)=> {
        if(new_id.length-1 === i && e ===".") return false;
        if(!isNaN(Number(e))) return true;
        if(["-","_","."].includes(e)) return true;
        if(ABC.has(e)) return true;

        return false
    })
   
    let stack = []
    for(let i=0; i<new_id.length; i++){
        stack.push(new_id[i])
        if(stack[stack.length-1] === "." &&stack[stack.length-2] === stack[stack.length-1]){
            stack.splice(-1)
        }
    }
    new_id = stack
    
    if(stack[0] === ".") new_id = new_id.slice(1,new_id.length)
    if(stack[stack.length-1] === ".") new_id.splice(-1)
    
    if(new_id.length === 0) new_id = ["a"]
    
     new_id = new_id.slice(0,15)
    if(new_id[0] === ".") new_id = new_id.slice(1,new_id.length)
    if(new_id[new_id.length-1] === ".") new_id.splice(-1)
    
    
    if(new_id.length <=2){
        let w = new_id[new_id.length-1]
        let a = w.repeat(3-new_id.length)
        return new_id.join('') + a
    }
    return new_id.join('')
}