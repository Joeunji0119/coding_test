function solution(storey) {
    
    const map = (x) => Number(x);
    let Arr = Array.from(String(storey),map)
    let count = 0
    
    for (let i=Arr.length-1; i>=0; i--){
      if( i === 0){
        console.log(Arr[0])
        return Arr[0]>5 ? count += 10-Arr[0]+1 : count += Arr[0]
      }
      
        if(0<Arr[i] && Arr[i]<5){
          count += Arr[i]
        }
        
        if(Arr[i]>5){
          count += 10-Arr[i]
          console.log(count)
          Arr.splice(i-1,1,Arr[i-1]+1)
        }
      
      if(Arr[i]===5){
        if(Arr[i-1]>=5){
          count += 5
          Arr.splice(i-1,1,Arr[i-1]+1)
        }
        if(Arr[i-1]<5){
          count += 5
        }
      }
    }
}