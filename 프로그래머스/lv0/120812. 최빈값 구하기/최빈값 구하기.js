function solution(array) {
    
    if(array.length === 1){
        return array[0]
    }
    
    let map = new Map();
    const len = array.length;
    
    for(let i=0; i<len; i++){
        let cnt = 0
        array.map(e=> { return (e === array[i]) ? cnt+=1 : ""})
        !map.has(array[i]) ? map.set(array[i],cnt) : ""
    }
  
  
  let valueArr = []
  let keyArr = []
  for (let [key, value] of map) {
    keyArr.push(key)
    valueArr.push(value)
  }

const max = Math.max(...valueArr)

for(let i=0; i<valueArr.length; i++){
  return valueArr.filter(e=>e=== max).length > 1 ? -1 : keyArr[valueArr.indexOf(max)]
    }
}
