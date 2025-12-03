
function solution(myStr) {
   const set = new Set(['a','b','c'])
   
   let result= ''
   let arr = []
   for(let i=0; i<myStr.length; i++){
       
        if(!set.has(myStr[i])){
             result = result + myStr[i]           
        }   
       
       
       if(myStr.length-1 === i && result.length >0){
           arr.push(result)
           break;
       }
       
       if(set.has(myStr[i]) && result.length >0){
           arr.push(result)
           result = ''
           continue;
       }


   }
    
    return arr.length === 0 ? ['EMPTY'] : arr
}