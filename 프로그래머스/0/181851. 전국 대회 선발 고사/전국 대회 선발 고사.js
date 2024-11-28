function solution(r,b) {
let idxArr = []

for (let i=0; i<b.length; i++){
  if(b[i]){
    idxArr.push([r[i],i])
  }
}

const result = idxArr.sort((a,b)=> a[0] - b[0])

return result[0][1] * 10000 + result[1][1] * 100 + result[2][1]
}