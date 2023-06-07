function minMaxArray(array) {
    min = 99999;
    max = -99999;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        } else if (array[i] < min) {
            min = array[i];
        }
    }

    return 'min : ' + min + ' max : ' + max;
}

console.log(minMaxArray([2, 3, 4, 5, 6, 7, 8, 9, 1, 10]));
