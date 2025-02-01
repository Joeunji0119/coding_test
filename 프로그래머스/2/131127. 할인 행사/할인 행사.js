function isValid(require, arr) {
    for (let [key, value] of require) {
        if ((arr.get(key) || 0) < value) return false;
    }
    return true;
}

function solution(want, number, discount) { 
    let require = new Map();
    let currentMap = new Map();
    let count = 0;

    for (let i = 0; i < want.length; i++) {
        require.set(want[i], number[i]);
    }


    for (let i = 0; i < discount.length; i++) {
        let addItem = discount[i];
        currentMap.set(addItem, (currentMap.get(addItem) || 0) + 1);

        if (i > 9) { 
            let removeItem = discount[i - 10];
            if (currentMap.has(removeItem)) {
                let countValue = currentMap.get(removeItem);
                if (countValue > 1) {
                    currentMap.set(removeItem, countValue - 1);
                } else {
                    currentMap.delete(removeItem);
                }
            }
        }


        if (i >= 9 && isValid(require, currentMap)) count++; 
    }

    return count;
}
