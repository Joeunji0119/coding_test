
const getZ = (arr1, arr2) => {
    const [x1,y1] = arr1
    const [x2,y2] = arr2
    
    return (y1 - y2) / (x1 - x2)
} 

function solution(dot) {
    if(getZ(dot[0],dot[1]) === getZ(dot[2],dot[3])) return 1
    if(getZ(dot[0],dot[2]) === getZ(dot[1],dot[3])) return 1
    if(getZ(dot[0],dot[3]) === getZ(dot[1],dot[2])) return 1
    
    return 0
}