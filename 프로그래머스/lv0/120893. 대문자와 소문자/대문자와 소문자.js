const solution = (my_string) => {
    const Array = [...my_string]
    const Filter = Array.map((x)=> x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    
    return Filter.join("")
}