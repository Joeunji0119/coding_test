const solution = (hp) => {
    
    if(hp>=5 && hp%5===0) {
        return hp/5
    }
    if(hp>=5 && hp%5 !==0){
        if(hp%5 < 3){
            return Math.floor(hp/5) + hp%5
        }
        if(hp%5 >=3){
            return Math.ceil(hp/5) + hp%5-3
        }
    }
    if(hp<5){
        if(hp>=3){
            return Math.floor(hp/3) + hp%3
        }
        if(hp<3){
            return hp
        }
    }
}