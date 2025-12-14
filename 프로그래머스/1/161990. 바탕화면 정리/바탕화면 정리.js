    const getRange = (rdx,lux,rdy,luy) => Math.abs(rdx - lux) + Math.abs(rdy - luy)

function solution(wallpaper) {
    let sx = wallpaper[0].length -1;
    let sy = wallpaper.length -1;
    
    let ex = 0
    let ey = 0
    
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                if(sx>j) sx = j
                if(sy>i) sy = i

                if(ex<j) ex = j                
                if(ey<i) ey = i
            }
        }
    }
    return [sy, sx, ey+1, ex+1]
}