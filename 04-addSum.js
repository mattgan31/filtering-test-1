function addSum(arr, target) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (i !== j) {
                if (arr[i] + arr[j] == target) {
                    return [i, j];
                }
            }
        }
    }
    return null
}

console.log("output : ", addSum([2, 7, 11, 15], 9));
console.log("output : ", addSum([3, 2, 3], 6));
console.log("output : ", addSum([3, 2, 4], 6));
console.log("output : ", addSum([3, 3], 6));
