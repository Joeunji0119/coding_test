function solution(flo) {
    let arr = flo.toString().split("")
    let result = [];


    for(let i=0; i<arr.length; i++){
        if(arr[i] === ".") return Number(result.join(""))
        result.push(arr[i])
    }
     return Number(result.join(""))
}