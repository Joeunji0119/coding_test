function solution(a, b, n) {

    // 마트에 주어야하는 병 수 a
    // 가져다 주면 마트가 주는 병수 b
    
    let count = 0;
    
    while(n >= a){
        const newBottle = (Math.floor(n/a))*b
        count = count + newBottle
        n = newBottle + n%a
    }

    
    return count;
}