function solution(arr) {
    let result = [];

    
    for(let i=0; i<arr.length; i++){
        
        let input = Array(arr[i]).fill(arr[i])
        
        result= result.concat(input)
    }
    
    return result
    
}