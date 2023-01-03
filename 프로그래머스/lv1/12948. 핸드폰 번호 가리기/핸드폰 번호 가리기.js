function solution(phone_number) {
    const arr = [...phone_number]
    const star = "*".repeat(arr.length-4)
    const num = arr.splice(0,arr.length-4,star)
    return arr.join("")
}