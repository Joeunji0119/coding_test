const solution = (my_str, n) => {
  const Arr = []
    for(let i=0; i<my_str.length; i+=n){
      Arr.push(my_str.substr(i,n))
    }
    return Arr
}