function solution(num_list) {
    let add = ""
    let even = ""
    
    for(let i=0; i<num_list.length; i++){
        let num = num_list[i]
        if(num % 2 === 0) add = add + num.toString()
        else even = even + num.toString()
    }
    
    return Number(add) + Number(even)
    
}