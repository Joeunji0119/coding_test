const isSuso = (num) => {
    if(num ===1) return false;
    if(num%2 === 0) return false;
    
    let sqrt = Math.sqrt(num)
    
    for(let i=3; i<=sqrt; i+=2){
        if(num%i === 0) return false
    }
    return true
}

function solution(nums) {
    let count = 0;
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let total = nums[i] + nums[j] + nums[k]
                if(isSuso(total)) {
                    count ++
                }
    }
  }
}
    return count
}