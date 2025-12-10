const ABC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const getAbc = (i) => {
    if(i<=25) return ABC[i]
    return ABC[i%26]
}

const getString = (e,skip,index) => {
    const skipArr = [...skip]
    let currentIndex = ABC.indexOf(e)
    let count = 0;
    
    while(count < index){
        currentIndex = (currentIndex + 1)%26
        if(!skipArr.includes(getAbc(currentIndex))){
            count++;
        }
    }
    return getAbc(currentIndex)
}



function solution(s, skip, index) {
    return [...s].map(e=>getString(e,skip,index)).join('')
}