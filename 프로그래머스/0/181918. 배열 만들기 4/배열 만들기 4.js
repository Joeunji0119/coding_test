function solution(arr) {
    let skt = [];
    
    for(let i=0; i<arr.length; i++){
        if(skt.length === 0) {
            skt.push(arr[i])
        }
        else if(skt[skt.length-1] < arr[i]){
            skt.push(arr[i])
        }
        else {
            skt = skt.slice(0, skt.length-1)
            i--
        }
    }
    
    return skt
}