const changeMap = (arr,n)=> {
    const change = (a)=> a.map(e1=> {
        if(e1 ==="0") return ""
        if(e1 === '1') return "#"
    })
    
    return arr.map(e=>{
        let el = e.toString(2).split('')
        let addEl = []
        if(el.length <n) {
            for(let i=0; i<n; i++){
                addEl[n-1-i] = (el[el.length-1-i] ||'0')
            }
            return change(addEl)
        }
        return change(el)
    })
}

function solution(n, arr1, arr2) {
    let a1 = changeMap(arr1,n)
    let a2 = changeMap(arr2,n)
    
    
    const sum = a1.map((a1_e,a1_i)=>
        a1_e.map((a,i)=>{
            if(a2[a1_i][i] === "" && a === "") return " "
            return "#"
        }).join("")
    )
    return sum
}