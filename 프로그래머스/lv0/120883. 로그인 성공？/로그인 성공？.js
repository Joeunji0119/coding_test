function solution(id_pw, db) {
    let map = new Map(db);
    const id = id_pw[0]
    const pw = id_pw[1]
    
    if(map.get(id) === pw) return "login"
    if(map.has(id) && map.get(id) !== pw) return "wrong pw"
    if(!map.has(id)) return "fail"
}