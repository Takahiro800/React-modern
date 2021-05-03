// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// // let val2 = "let変数を再宣言";

// const val3 = "constを宣言";
// console.log(val3);

// const val3 = "const変数を再宣言";

// constで定義したプロパティはプロパティの変更が可能
// const val4 = {
//   name: "Takahiro",
//   age: 27,
// };
// val4.name = "taemasu";
// val4.address = "Japan";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能

// 分割代入
// const myProfile = ["たえます", 27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値、引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2, 3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);
