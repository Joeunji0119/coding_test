function solution(num_list) {
    const lastNum = num_list[num_list.length-1]
    const second = num_list[num_list.length-2]

    if(lastNum-second >0) return [...num_list,lastNum-second] 
    
    return [...num_list,lastNum*2]
}