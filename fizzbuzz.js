module.exports = function () {
  let arr = [];
  for (let i = 1; i <=100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push("FizzBuzz");
    }
    else if (i % 5 === 0 ) {
      arr.push("Buzz");
    }
    else if (i % 3 === 0) {
      array.push("Fizz");
    }
    else {
      arr.push(i);
    }

  }
  return arr;
}
