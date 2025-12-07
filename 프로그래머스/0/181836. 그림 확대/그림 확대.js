function solution(picture, k) {
    let result = Array.from({length:(picture.length)*k},()=> Array(picture[0].length*k).fill(""))


    for(let i=0; i<picture.length; i++){
        for(let j=0; j<picture[i].length; j++){
            
            
            const v = picture[i][j]
            
            for(let s=0; s<k; s++){
                for(let t=0; t<k;t++){
                    result[i*k+s][j*k+t] = v
                }
            }
            
        }
    }
    return result.map(e=>e.join(''))
}