function isPalindrome(array) {
    newArray = array.map(str => {
        return str.toLowerCase();
    })
    for (let i = 0; i < newArray.length / 2; i++){
        if (newArray[i] !== newArray[newArray.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(["asep", "budi", "-", "budi", "asep"]));
console.log(isPalindrome(["Tom", "Tim", "tim", "tom"]));
console.log(isPalindrome(["tik", "tok", "toko", "tik"]));
