function solution(n, w, num) {
    const column = Math.ceil(n/w)
    const area = Array.from({length:column},(_,c)=> {
        
    if(c%2 !==0) return Array.from({length:w},(_,r)=> {
         if((r+1)+w*c > n) return 0
         return (r+1)+w*c
     }).reverse()
     
     return Array.from({length:w},(_,r)=> {
         if((r+1)+w*c > n) return 0
         return (r+1)+w*c
     })
    })
    
  const numColumn = Math.floor((num - 1) / w)
  let numRow = (num - 1) % w

  if (numColumn % 2 === 1) {
    numRow = w - 1 - numRow
  }
    
    let count = 1;
    for(let i=area.length-1; i>=0; i--){
        if(area[i][numRow] === num) { return count }
        if(area[i][numRow]){ count++ }
    }
    
}