function solution(n) {
    return Array.from(({length:n}),(_,index)=> 
        Array.from(({length:n}),(_,second)=> index === second ? 1: 0 )
    )
}