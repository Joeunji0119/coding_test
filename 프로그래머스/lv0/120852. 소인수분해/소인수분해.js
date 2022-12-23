function solution(n) {
  if(n===2){
    return [2]
  }
  let answer = 2
  const Arr = []
  while(answer <= n){
      if(n%answer!==0){
        answer = answer+1
      }
    if(n%answer===0){
      n = n/answer
      Arr.push(answer)
    }
  }
  const set = new Set(Arr)
  const unique = [...set]
  return unique
}