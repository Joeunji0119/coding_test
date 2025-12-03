function solution(arr, queries) {
    return queries.reduce((a,c,i)=>{
        let [x,y] = c;
        for(let j=0; j<=y-x ; j++){
            a[x+j] = a[x+j] + 1
        }
        return a
    },arr)
}