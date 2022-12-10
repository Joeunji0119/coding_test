const solution = (letter) => {
    
    const letterArr = letter.split(" ")
    const answer = []
    
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    for(i=0; i<letterArr.length; i++){
        answer.push(morse[letterArr[i]])
    }
    return answer.join("")
}