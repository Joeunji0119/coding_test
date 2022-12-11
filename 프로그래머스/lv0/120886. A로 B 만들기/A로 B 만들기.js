const solution = (before, after) => {
    const beforeArr = [...before].sort()
    const afterArr = [...after].sort()
    return beforeArr.join("") === afterArr.join("") ? 1 : 0
}