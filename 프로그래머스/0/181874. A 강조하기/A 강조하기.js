const isUpperCase = (str) => str.toUpperCase() === str 

function solution(myString) {
    return myString.split("").map(e=> {
        if(e === "a") return "A"
        if(e !== "A" && isUpperCase(e)) return e.toLowerCase()
        return e
    }).join("")
}