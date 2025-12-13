const isNumber = (s) =>  !Number.isNaN(Number(s)) && s !=="" 

const divier = (w) => {
    let arr = [...w]
    let result = []
    let word = ""
    for(let i=0; i<arr.length; i++){
        
        if(!['*','#','S',"T","D"].includes(arr[i])){
            word = word + arr[i]
            continue;
        }
        
        if(['S',"T","D"].includes(arr[i])){
            result.push(word)
            result.push(arr[i])
        }
        if(['*',"#"].includes(arr[i])){
            result.push(arr[i])
        }
    }
    
    return result
} 

const getRoundArr = (s) => {
    let round = []
    let word = ''
    for(let i=0; i<s.length; i++){
        word = word + s[i]
        
        if(['S',"T","D"].includes(s[i]) && isNumber(s[i+1])){
            round.push(word)
            word = ""
        }
        if(['*',"#"].includes(s[i])){
            round.push(word)
            word = ""
        }
    }
    if(word !==""){ round.push(word) }

    return round.map(divier)
} 

    

function solution(dartResult) {
    const round =  getRoundArr(dartResult)
    
    console.log(333, round)
    
    let total = []
    
    for(let i=0; i<3; i++){
        let t = 0;
        for(let j=0; j<round[i].length; j++){
            if(isNumber(round[i][j])){ t = Number(round[i][j]); continue; }
            if(round[i][j] === 'D'){  t = Math.pow(t,2); continue; }
            if(round[i][j] === 'T'){  t = Math.pow(t,3); continue; }
            if(round[i][j] === '*'){
                if(i===0) {
                    t = t*2;
                    continue;
                }
                total[i-1] = total[i-1]*2
                t = t*2; continue;
            }
            if(round[i][j] === '#') {
                t = -1*t
            }
        }
        total.push(t)
    }
    return total.reduce((a,c)=> a+c,0)
}