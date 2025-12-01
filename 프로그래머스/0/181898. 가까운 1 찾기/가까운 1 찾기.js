function solution(arr, idx) {
    for(let i=0; i<arr.length; i++){
        if(i<idx) {continue}
        if(1 === arr[i]) return i
    }
    return -1
}