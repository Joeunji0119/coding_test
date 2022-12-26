function solution(dots) {
    const xArr = []
    for(let i=0; i<dots.length; i++){
        xArr.push(dots[i][0])
    }
    const yArr = []
    for(let i=0; i<dots.length; i++){
        yArr.push(dots[i][1])
    }
    const Xmax = Math.max(...xArr)
    const Xmin = Math.min(...xArr) 
    
    const Ymax =  Math.max(...yArr)
    const Ymin =  Math.min(...yArr) 
    
    return (Xmax-Xmin)*(Ymax-Ymin)
}