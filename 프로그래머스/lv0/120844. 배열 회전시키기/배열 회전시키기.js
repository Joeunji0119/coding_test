const solution = (numbers, direction) => {
    if (direction === "right") {
        const lastNum = numbers.pop()
        numbers.unshift(lastNum)
    }
    if (direction === "left") {
        const FirstNum = numbers.shift()
        numbers.push(FirstNum)
    }
    return numbers
}