function solution(my_string) {
    const arr = [...my_string]
    const filter = arr.filter((el,index)=> arr.indexOf(el) === index)
    return filter.join("")
}