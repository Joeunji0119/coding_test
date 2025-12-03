function solution(arr, flag) {
    return arr.reduce((a,c,i)=>{
        if(flag[i]){
            a = a.concat(Array(arr[i]*2).fill(arr[i]))
        } else {
            a = a.slice(0,-arr[i])
        }
        return a
    },[])
}