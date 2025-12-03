
const reducer = (prev,action) => {
    switch(action){
        case 'w' : { return prev + 1 }
        case 's' : { return prev - 1 }
        case 'd' : { return prev + 10 }
        case 'a' : { return prev - 10 }
    }
}

function solution(n, control) {
    return control.split('').reduce((a,c)=> {
        a = reducer(a,c)
        return a
    },n)
}