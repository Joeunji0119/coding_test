function solution(strArr) {
    let map = new Map()
    
    for(let i=0; i<strArr.length; i++){
        let len = strArr[i].length
        if(!map.has(len)){
            map.set(len,1)
        } else {
            let count = map.get(len)
            map.set(len, count+1)
        }
    }
    
    
    let count = 0
    for (let [key,value] of map){
        if(value > count) {
            count = value
        }
    }
    return count
}