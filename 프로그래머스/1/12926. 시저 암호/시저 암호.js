function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    const shiftChar = (char, n) => {
        if (lower.includes(char)) {
            const index = (lower.indexOf(char) + n) % 26;
            return lower[index];
        } else if (upper.includes(char)) {
            const index = (upper.indexOf(char) + n) % 26;
            return upper[index];
        } else {
            return char; 
        }
    };
    
    return Array.from(s).map(char => shiftChar(char, n)).join('');
}