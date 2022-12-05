const solution = n => {

    const answer = []
    
    if(n<3){
        return 1
    }
  
    if(n>2){
      const num = n*6
        for(let i=1; i<=num; i++){
            if((n*i)%6 === 0){
                answer.push(i*n)
            }
        }
        return answer[0]/6
    }
  
}
