function solution(n) {
    const arr = []
    for(i=0; i<3*n; i++){
        let a = i+""
        if(!a.includes("3")&& i%3 !==0){
            arr.push(i)
        }
    }
  return arr[n-1]
}

