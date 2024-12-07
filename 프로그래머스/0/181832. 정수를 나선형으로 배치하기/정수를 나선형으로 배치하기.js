function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1; 
    let row = 0, col = -1; 
    let step = n; 
    let direction = 1; // 이동 방향 (1: 증가, -1: 감소)

    while (step > 0) {
        for (let i = 0; i < step; i++) {
            col += direction; // 열 이동
            arr[row][col] = num++;
        }
        step--; // 이동 횟수 감소

        for (let i = 0; i < step; i++) {
            row += direction; 
            arr[row][col] = num++;
        }
        direction *= -1;
    }

    return arr;
}