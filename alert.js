console.log( typeof (true + false));
console.log( typeof (6 / "3") );
console.log( typeof ("2" * "3"));
console.log( typeof (4 + 5 + "px"));
console.log( typeof (7 / 0));
console.log( typeof ("  -9\n" + 5));
console.log( typeof ("  -9\n" - 5));
console.log( typeof (null + 1));
let msg = "-9" - 5; // a number
let msg2 = "-9" + 5; // a string + acts as concatenation here
let msg3 = -9 + 5; // a number + acts as a number
console.log(msg);
console.log(msg2);
console.log(msg3);
let apples = "2";
let oranges = "3";
// both values converted to numbers before the binary plus
console.log( +apples + +oranges ); // 5
console.log("apple" > "apples");