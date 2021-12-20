
// 동적 유형 
//  -> 어느 곳에도 구속되지 않는다.
let message = "hello";
message = 123456;

// Numbers
const bigInt;

// string
let name = "John"
alert (`Hello, ${name}!`);

//boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

//null
let age = null;

//undefined
let age;

let age = 100;
age = underfined;

//object
// 데이터 컬렉션과 엔터티를 저장하여
// 중요하기 때문에 특별한 대우를 받아야 한다.

//typeof
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

// 작업_1
// 1, "name", Ilya