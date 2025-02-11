function solution(s) {
    
    const numWords = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    let word = "";
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            result += s[i]; 
            word = "";  
        } else {
            word += s[i];  
            if (numWords[word] !== undefined) { 
                result += numWords[word];  
                word = "";  
            }
        }
    }

    return Number(result);
}
