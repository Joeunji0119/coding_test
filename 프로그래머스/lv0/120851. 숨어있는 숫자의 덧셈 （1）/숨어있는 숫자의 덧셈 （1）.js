const solution = (my_string) => {
    let sum = 0; 
    const array = [...my_string]
    const numArray = array.filter((x) => isNaN(x) !== true)
    const stringArray = numArray.map((x)=> x*1)
    stringArray.forEach(x => sum += x)
    
    return sum
    
}

