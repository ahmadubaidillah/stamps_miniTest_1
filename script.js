// console.log(message);

let arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
// const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let input = "";
arr.reverse();

// if (text % 3 === 0 && text % 5 === 0) {
//   arr[i] = "FooBar";
// } else if (text % 3 === 0) {
//   console.log("Foo");
// } else if (text % 5 === 0) {
//   console.log("Bar");
// }
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
for (let i = 0; i < arr.length; i++) {
  var isPrime = true;
  for (var j = 2; j < arr[i]; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (arr[i] === 1) {
    isPrime = false;
  }
  if (isPrime) {
    continue;
  }

  if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
    arr[i] = "FooBar";
  } else if (arr[i] % 3 === 0) {
    arr[i] = "Foo";
  } else if (arr[i] % 5 === 0) {
    arr[i] = "Bar";
  }
  text += arr[i] + ",";
}
// let index = text.indexOf(text % 3 === 0);

console.log(text);
