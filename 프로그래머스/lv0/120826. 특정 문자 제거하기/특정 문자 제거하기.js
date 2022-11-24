const solution = (my_string, letter) => {
    const stringArr = [...my_string]
    const Arr =stringArr.filter((el)=>el !== letter)
    return Arr.join('')
}