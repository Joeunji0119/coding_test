function solution(nums) {
  const map = new Map();
  
  for(let i=0; i<nums.length; i++){
    let count = 1;
    
    if(map.has(nums[i])){
      count += map.get(nums[i])
    }
    map.set(nums[i],count)
  }
  return nums.length/2<map.size ? nums.length/2 : map.size
}