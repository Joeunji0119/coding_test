const func = (answers,arr) => {
    const len = arr.length;
    let count = 0;
    for(let i=0; i<answers.length; i++){
        if(answers[i] === arr[i%len]){
           count ++
          }
    }
    return count
}

function solution(answers) {
    const len = answers.length;
    
    let arr = [func(answers,[1,2,3,4,5]),func(answers,[2,1,2,3,2,4,2,5]),func(answers,[3,3,1,1,2,2,4,4,5,5])].map((e,i)=>[i+1,e])

    const result = arr.sort((a,b)=> {
        if(b[1] === a[1]) return  a[0] - b[0] 
        else return b[1] - a[1]
    })
    
    const max = result[0]

    
    if(result.slice(1,3).find(e=>e[1] === max[1])) return result.filter(e=>e[1]=== max[1]).map(e=>e[0])
    
    return [max[0]]
    
}