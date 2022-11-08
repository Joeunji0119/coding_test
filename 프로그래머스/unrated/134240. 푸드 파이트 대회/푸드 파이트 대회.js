function solution(food) {
    const answer =[];
    const answer2=[];

    for(i=1; i<food.length; i++){
        answer.push(Math.floor(food[i]/2))
    }
    
    for(j=0; j<answer.length; j++){
        answer2.push(`${j+1}`.repeat(answer[j]))
    }
    const word = answer2.join("")
    const reverse = answer2.reverse().join("")
    return word + 0 + reverse
}