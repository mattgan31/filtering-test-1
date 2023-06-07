function insertToArray(array, value) {
    array.push(value);
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - 1; j++){
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(insertToArray([4, 7, 1, 20], 9));
console.log(insertToArray([3, 5, 2], 7));
console.log(insertToArray([2, 14, 10, 1, 11, 12, 3, 4], 7));
