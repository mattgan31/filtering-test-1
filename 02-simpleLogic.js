
function simplePyramid(startNumber = 1, maxRow = 7) {
  for (let i = 0; i < maxRow; i++) {
    let pattern = "";

    for (let j = 0; j <= i; j++) {
      pattern += startNumber + " ";
      startNumber++;
    }
    console.log(pattern);
    startNumber = startNumber - i;
  }
  return ''
}

console.log(simplePyramid());
console.log(simplePyramid(5));
