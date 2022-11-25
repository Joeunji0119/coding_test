const solution = (sides) => {
    
  sides.sort((a,b)=>b-a)
  const result = sides[0]-sides[1]-sides[2] >= 0 ? 2 : 1
  
  return result
}

