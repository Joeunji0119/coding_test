function solution(my_string, indices) {
    let set = new Set(indices)
    return my_string.split('').filter((_,index)=>!set.has(index)).join('')
}