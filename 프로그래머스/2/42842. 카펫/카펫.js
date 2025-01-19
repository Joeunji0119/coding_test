function solution(brown, yellow) {

  const total = brown + yellow;
    
  for (let h = 3; h <= Math.sqrt(total); h++) {
    if (total % h === 0) {
      const w = total / h; 

      if (2 * w + 2 * h - 4 === brown) {
        return [w, h]; 
      }
    }
  }
    
}

