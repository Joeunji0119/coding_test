function solution(numbers) {
    const arr = numbers.sort()
    let count = 0;
    for(i=0;i<10;i++){
        if(i !== arr[i]){
            count += i
            arr.splice(i,0,i)
        }
    }
    return count
}