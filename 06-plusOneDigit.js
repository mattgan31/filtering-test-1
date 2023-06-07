function plusOneDigit(arr){
    let num = Number(arr.join(''));
    num += 1;
    newArr = Array.from(String(num));
    const arrayNum = newArr.map((str) => Number(str));
    return arrayNum;
}

console.log(plusOneDigit([1, 2, 3]));
console.log(plusOneDigit([4, 3, 2, 1]));
console.log(plusOneDigit([9]));
