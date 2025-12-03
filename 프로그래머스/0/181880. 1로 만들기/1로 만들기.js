    const calc = (num, count) => {
        if(num===1) return count
        
        if(num%2===0) {
            return calc(num/2, count+1)
        } else {
            return calc((num-1)/2,count+1)
        }
    }

function solution(num_list) {
    return num_list.reduce((a,c)=> a +calc(c,0),0)
}