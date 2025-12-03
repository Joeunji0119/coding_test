function solution(my_string, is_suffix) {
    
    if(is_suffix.length > my_string.length) return 0
    const gap = my_string.length - is_suffix.length
    
    for(let i=is_suffix.length-1; i>=0; i--){
        if(my_string[i + gap] !== is_suffix[i]) return 0 
    }
    return 1
}