const solution = (array, n) => {
    const answer = array.push(n)
    const Arr = array.sort()
    const IndexN = Arr.indexOf(n)
    
    return Math.abs(Arr[IndexN] - Arr[IndexN-1])> Math.abs(Arr[IndexN] - Arr[IndexN+1]) ? Arr[IndexN+1] : Arr[IndexN-1]
}
    