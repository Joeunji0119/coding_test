    const getStringMap = (arr) => {
        let map = new Map()
        
        for(let i=0; i<arr.length; i++){
            let key = arr[i]
            if(map.has(key)) {
                map.set(key, map.get(key) + 1)
            } else {
                map.set(key, 1)
            }
        } 
   
        return map
    }

function solution(my_string) {
    const abc = ['a','b','c','d',"e",'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    const abcToUpperCase = abc.map((e)=>e.toUpperCase())
    
    const arr = [...abcToUpperCase, ...abc];
    let result = Array(arr.length).fill(0)
    
    let paramsArr = [...my_string]
    const mapArr = Array.from(getStringMap(paramsArr))
    
    for(let i =0; i<mapArr.length; i++){
        const [key,num] = mapArr[i]
        const index = arr.findIndex(e=>e === key)
        result[index] = num
    }
    
    
    return result
}