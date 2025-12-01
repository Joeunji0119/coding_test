function solution(start_num, end_num) {
    
    const func = (arr,end,count) => {
        if(count > end) return arr
        arr.push(count)
        count++
        return func(arr, end, count)
    } 
    return func([],end_num,start_num)
}