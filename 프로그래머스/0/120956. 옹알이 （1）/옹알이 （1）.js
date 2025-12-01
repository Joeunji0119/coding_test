const canSpell = (word) => {
    let spall = ["aya","ye","woo","ma"]
    const wordArr = [...word]
    let a = [];
    for(let i=0; i<wordArr.length; i++){
        a.push(wordArr[i])
        let johap = a.join("")
        if(spall.includes(johap)){
            a = [];
            spall = spall.filter((e)=> e !== johap)

            if(wordArr.length-1 === i) return true
        }
    }
    
    return false
}

function solution(babbling) {
    return babbling.reduce((a,c)=> {
        if(canSpell(c)){ a = a + 1 }
       return a
    },0)
}