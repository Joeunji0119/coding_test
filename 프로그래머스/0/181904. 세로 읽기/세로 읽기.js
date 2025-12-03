const makeArea = (my_string, m) => {
    let area = []
    let a = []
    for (let i=0; i<my_string.length; i++){   
        
        if(a.length === m) { 
            area.push(a)
            a = []
        }
        
        a.push(my_string[i])
        if(my_string.length-1 === i) {
            area.push(a)
        }
    }
    
    return area
}

function solution(my_string, m, c) {
    const area = makeArea(my_string,m)
    
    return Array.from({length:area.length},(e,i)=> area[i][c-1]).join('')
}