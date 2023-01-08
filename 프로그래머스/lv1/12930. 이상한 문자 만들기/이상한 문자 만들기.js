function solution(s) {
    const arrString = s.split(" ")
    const len = arrString.length

    for(let i=0; i<len; i++){
        arrString.splice(i,1,arrString[i].split(""))
    }
    
    function chg (arr) {
        for(i=0;i<arr.length;i++){
            if(i%2===0){
                arr.splice(i,1,arr[i].toUpperCase())
            }
            if(i%2!==0){
                arr.splice(i,1,arr[i].toLowerCase())
            }
        }
        return arr.join("")
    }
    
    let answer = ""
    
    for(let i=0; i<len; i++){
        answer =  answer + chg(arrString[i]) + " "
    }
    return answer.substr(0,answer.length-1)
}
