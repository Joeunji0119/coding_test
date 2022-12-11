function solution(i, j, k) {
    return Array(j+1).fill().map((arr,idx) => idx).slice(i).join("").split("").map(Number).filter((el) => el === k).length

}