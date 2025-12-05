const cost = {
    'iceamericano':4500,
    'americanoice':4500,
    'hotamericano':4500,
    'americanohot':4500,
    'americano':4500,
    'anything':4500
}


function solution(order) {
    return order.reduce((a,c)=> {
        const price = cost[c] ?? 5000
        a = a + price
        return a
    },0)
}