const solution = ch => {
  const func = cp => {
    if(cp < 10){
        return 0
    }
    let sv = Math.floor(cp/10)
    return sv + func(sv + (cp % 10))
  }
  return func(ch)
}