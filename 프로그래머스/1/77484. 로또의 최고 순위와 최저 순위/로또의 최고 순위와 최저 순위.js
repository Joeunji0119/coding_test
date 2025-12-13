const rank = (match)=> {
    switch(match){
        case 6 : return 1
        case 5 : return 2
        case 4 : return 3
        case 3 : return 4
        case 2 : return 5
        default : return 6
    }
}

function solution(lottos, win_nums) {
    const map = lottos.reduce((a,c)=> {
        if(win_nums.includes(c)){ a = {...a, min:a.min+1} }
        if(c === 0) { a = {...a, zero: a.zero +1 } }
        return a
    } , { zero: 0, min: 0 })
    
    const min = map.min
    const max = map.min + map.zero > 6 ? 6 : map.min + map.zero
    console.log(map)
    
    return [rank(max),rank(min)]
}