function solution(my_string, num1, num2) {
    const stringArr = [...my_string]
    const firstChange = stringArr[num1]
    const secondChange = stringArr[num2]
    stringArr.splice(num1, 1, secondChange)
    stringArr.splice(num2, 1, firstChange)
    return stringArr.join("")
}