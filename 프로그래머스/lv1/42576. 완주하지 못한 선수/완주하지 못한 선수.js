function solution(participant, completion) {
    const p = participant.sort()
    const c = completion.sort()
    for(let i=0; i<participant.length; i++){
        if (p[i] !== c[i]) return p[i]
    }
}