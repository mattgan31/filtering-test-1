
function findTarget(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            console.log('output : ' + i);
        }
    }
}

findTarget([1, 2, 4], 4);
findTarget([-1, 2, 5, 6, 7], 6);
