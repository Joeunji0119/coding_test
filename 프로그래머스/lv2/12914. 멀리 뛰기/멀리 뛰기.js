function solution(n) {
    let arr = []
    
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;

    for (i=3; i<=n; i++){
      arr[i] = (arr[i-1]+arr[i-2])%1234567
    }
    
    return arr[n]
}