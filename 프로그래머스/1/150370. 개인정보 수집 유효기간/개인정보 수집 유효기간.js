const getTermMap = (terms) => {
    return terms.reduce((a,c)=>{
        const [key, month] = c.split(" ")
        a = {...a, [key]:Number(month)}
        return a
    },{})
}

const getTodayMap = (today) => {
    const [year, month, date] = today.split(".")
    return {
        year: Number(year),
        month: Number(month),
        date: Number(date)
    }
}

const getExpireMap = (privDate, termMonth) => {
    const {year, month, date} = getTodayMap(privDate)
    
  let totalMonth = month + termMonth
  let expireYear = year + Math.floor((totalMonth - 1) / 12)
  let expireMonth = ((totalMonth - 1) % 12) + 1
  let expireDate = date - 1

  if (expireDate === 0) {
    expireDate = 28
    expireMonth = expireMonth-1
    if (expireMonth === 0) {
      expireMonth = 12
      expireYear = expireYear-1
    }
  }
    return {year: expireYear, month:expireMonth, date:expireDate}
}

const getIsOver = (today, expireDate) => {
    if(today.year < expireDate.year) return false;
    if(today.year > expireDate.year) return true;
    if(today.year === expireDate.year) {
        if(today.month < expireDate.month) return false;
        if(today.month > expireDate.month) return true;
        if(today.month === expireDate.month) {
            if(today.date > expireDate.date) return true
            return false
        }
    }
}

function solution(today, terms, privacies) {
    const termMap = getTermMap(terms)
    const todayMap = getTodayMap(today)
    
    return privacies.reduce((a,c,i)=>{
        const [privDate, term] = c.split(" ")
        const expireMap = getExpireMap(privDate,termMap[term])
        const isOver = getIsOver(todayMap,expireMap)

        if(isOver){a.push(i+1)}
        return a
    },[])
}