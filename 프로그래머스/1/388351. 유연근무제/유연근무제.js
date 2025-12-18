const getDeadTime = (schedules) => {
    const callback = (time)=> {
        let hour = Number(String(time).slice(0,String(time).length-2))
        let min = Number(String(time).slice(-2))
        if(min>59){
            return (hour + 1) * 100 +min -60
        }
        return time
    }
    return schedules.map(time => callback(time+10))
}

const getTimeLogs = (timelogs,startday) => {
    return timelogs.map(el=>{
        let a = startday
        return el.filter((e,i)=> {
            if(a === 8) { a = 1 }
            if(a === 6 || a === 7){
                 a++
                return false
            }
          a++
        return true
    })
    })
}

function solution(schedules, timelogs, startday) {
    const deadTime = getDeadTime(schedules)
    const timelog = getTimeLogs(timelogs,startday)
    return timelog.reduce((a,c,i)=>{
        const noJigak = c.every(e=>e<=deadTime[i])
        if(noJigak) { a++}
        return a
    },0)
}