function solution(people, limit) {
    let arr = people.sort((a,b)=>b-a);
    let heavy = 0;
    let light = arr.length - 1;
    let count = 0;
    
    while(heavy <= light){
        if(arr[heavy] + arr[light] <= limit){
            light --;
        }
        count ++;
        heavy ++;
    }
    
    return count;
}