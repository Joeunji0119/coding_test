function solution(my_string) {
    
    let result = []
    let a = ""
    for(let i=0; i<my_string.length; i++){

        if(my_string[i] !== " ") {
            a = a + my_string[i]
            if(my_string.length -1 === i){
                result.push(a)
            }
        } else {
            if(a.length >0) {
                result.push(a)
            }
            a = ""
        }
    }
    return result
}