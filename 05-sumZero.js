function sumZero(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            for (let k = 0; k < arr.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    if (arr[i] == 0 || arr[j] == 0 || arr[k] == 0) {
                        continue;
                    }
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        return [arr[i], arr[j], arr[k]];
                    }
                }
            }
        }
    }
    return null
}

console.log("output : ", sumZero([-1, 0, 1, 2, -1, 4]));
console.log("output : ", sumZero([2, 3, 4, -1, -2]));
