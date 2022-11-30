const solution = (array) => {
    array.sort((a,b)=> b-a)
    const index = Math.ceil((array.length-1)/2)
    return array[index]
}