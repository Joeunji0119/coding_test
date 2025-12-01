function solution(num_list) {
    const multi = num_list.reduce((a,c)=> a*c,1)
    const plus = num_list.reduce((a,c)=> a+c,0)**2
    
    return multi < plus ? 1 : 0
}