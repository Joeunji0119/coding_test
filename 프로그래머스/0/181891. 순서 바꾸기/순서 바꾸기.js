function solution(num_list, n) {
    let a = num_list.slice(0,n)
    let b = num_list.slice(n,num_list.length)
    
    return b.concat(a)
}