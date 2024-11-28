function solution(arr, query, i = 0) {
  if(i === query.length){
    return arr
  }
  
  const aq = query[i]
  const isH = i % 2 === 1
  
  if(isH) arr = arr.slice(aq)
  else arr = arr.slice(0,aq+1)
  
  
  return solution(arr,query, i+1)
}
