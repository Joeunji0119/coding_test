function *gen5(){
    let i = 1;
    while(true){
        yield Number(Number(i).toString(2)) * 5
        i ++
    }
}

function solution(l, r) {
    
    let value = 0;
    const arr = [];
    const n = gen5();
    
    while(l > value){
        value = n.next().value;
    }
    
    while(value <= r){
        arr.push(value);
        value = n.next().value;
    }
    
    return arr.length > 0 ? arr :[-1]
}