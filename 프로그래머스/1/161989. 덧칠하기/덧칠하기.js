function solution(n, m, section) {
    let painted = 0;
    return section.reduce((a,c,i)=>{
        if(c >= painted){
            painted = c+m
            a++
        }
        return a
    },0)
}