function solution(common) {
    if(common[2]-common[1] === common[1]-common[0]){
        let plus = common[2]-common[1]
        return common[common.length-1] + plus
    }
    if(common[2]/common[1] === common[1]/common[0]){
        let mult = common[2]/common[1]
        return common[common.length-1] * mult
    }
}