const missFunc = (name,yearning) => {
    return Object.fromEntries(name.map((e,i)=>[e,yearning[i]]))
}

function solution(name, yearning, photo) {
    let missMap = missFunc(name,yearning)
    
    return photo.map((e)=> e.reduce((a,c) => a + (missMap[c] ||0),0))
}