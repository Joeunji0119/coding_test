const solution = (num, k) => {
    const numArr = [...String(num)].map((x)=>Number(x))
    const find = numArr.findIndex((el,idx,arr)=>el === k)
    return find !== -1 ? find+1 : -1
}