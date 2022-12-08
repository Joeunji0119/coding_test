const solution = (order) => {
    return [...String(order)].map(x=>Number(x)).filter(x=>x%3===0&&x!==0).length
}