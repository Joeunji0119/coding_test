const getStart = (park) => {
    for(let i=0; i<park.length; i++){
        for(let j=0; j<park[i].length; j++){
            if(park[i][j] === "S"){ return [j,i] }
        }
    }
}

const dir = {
  N: [0, -1],
  S: [0, 1],
  W: [-1, 0],
  E: [1, 0],
}


function solution(park, routes) {
    const [xi, yi] = getStart(park);
    
    console.log(111, xi, yi)
    
    let x = xi;
    let y = yi;
    
    for(let i=0; i<routes.length; i++){
        const [key, num] = routes[i].split(" ")
        const [moveX, moveY] = dir[key]

        let canMove = true;
        
        for(let k=1; k<=num; k++){
            let kx = x+moveX*k
            let ky = y+moveY*k
        if(ky < 0 ||
           ky >= park.length ||
           kx < 0 ||
           kx >= park[0].length ||
           park[ky][kx] === "X"
          ){ canMove = false; break; }
        } 
        
        if(canMove){
            x = x + moveX*num
            y = y + moveY*num   
        }
    }
    
    return [y,x]
}   