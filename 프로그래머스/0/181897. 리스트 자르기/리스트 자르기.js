function solution(n, slicer, num_list) {
    let [a,b,c] = slicer;
    
    if(n ===1) return num_list.slice(0,b +1)
    if(n ===2) return num_list.slice(a,num_list.length)
    if(n ===3) return num_list.slice(a,b +1)
    if(n ===4) {
        let area = num_list.slice(a,b+1)
        return area.filter((e, index)=> index % c === 0)    
    }
 }