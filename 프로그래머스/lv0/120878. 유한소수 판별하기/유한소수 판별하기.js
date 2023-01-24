function solution(a, b) {
    const str = (a/b).toString()
    console.log(b%a)

    return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}