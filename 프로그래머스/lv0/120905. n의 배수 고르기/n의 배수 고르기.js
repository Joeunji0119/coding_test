const solution = (n, numlist) => {
   const filterArray = numlist.filter((x)=> x % n === 0)
   return filterArray
}