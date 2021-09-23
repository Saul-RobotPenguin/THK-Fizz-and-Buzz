function fizzBuzz(x) {
  if (x % 3 < 1 && x % 5 < 1) {
    console.log("FizzBuzz");
  } else if (x % 3 < 1) {
    console.log("fizz");
  } else if (x % 5 < 1) {
    console.log("buzz");
  } else {
    console.log(x);
  }
}

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(1);
