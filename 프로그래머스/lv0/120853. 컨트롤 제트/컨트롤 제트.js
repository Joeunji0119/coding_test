const solution = (s) => {
    const string = s.replaceAll(" ",",")
    const Arr = string.split(",")
    const filterArr = []
    
    for(let i=0; i<Arr.length; i++){
        if(Arr[i+1] !== "Z" && Arr[i] !== "Z"){
            filterArr.push(Arr[i])
        }
    }
    const num = filterArr.map(x=>Number(x))
    if(num.length ===0){return 0}
    if(num.length !==0){return num.reduce((a,b)=>a+b)}
}