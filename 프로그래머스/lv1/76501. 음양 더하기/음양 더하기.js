function solution(absolutes, signs) {
    
    const arr = []
    for(let i=0; i<absolutes.length; i++){
        let boo = 0
        signs[i] === true ? boo += 1 : boo += -1
        arr.push(absolutes[i]*boo)
    }
    return arr.reduce((a,b)=>a+b)
}