const solution = (numbers, k) => {

    const len = numbers.length
    
    const even = numbers.filter((x)=>x%2===0)
    const odd = numbers.filter((x)=>x%2!==0)
    
    if(numbers.length%2===0){
        const div = odd.length
         if(div>=k){
            return odd[k-1]
          }
          if(div<k){
            return odd[(k-1)%div]
          }
    }
    
     if(numbers.length%2!==0){
        const numArr = odd.concat(even)
        const div = numArr.length
        
         if(div>=k){
            return numArr[k-1]
          }
          if(div<k){
            return numArr[(k-1)%div]
          }
     }
}

