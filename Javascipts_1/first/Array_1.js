// 희소 배열
// -> 요소의 위치가 연속적이지 않은 배열을 의미
var arr = new Array();
arr[99] = "JavaScript";
document.write("배열의 길이는" + arr.length + "입니다.");
// length 프로퍼티 값보다 배열 요소의 개수가 언제나 적습니다.

// 다차원 배열
// -> 배열 요소가 또 다른 배열인 배열을 의미한다.
// 2차원 배열이란 배열 요소가 1차원 배열인 배열을 의미
// 3차원 배열이란 배열 요소가 2차원 배열인 배열을 의미
var arr = new Array(3);
for (var row = 0; row < 3; row++) {
  arr[row] = new Array(4);
  for (var column = 0; column < 4; column++) {
    arr[row][column] = "[" + row + "," + column + "]";
    document.write(arr[row][column] + "");
  }
}

// 연관 배열(associative array)
// 숫자로 된 인덱스 대신 문자열로 된 키(key)를 사용하는 배열
// 자바스크립트는 연관 배열처럼 사용할 수 있는 객체(object)
var arr = [];   
arr["하나"] = 1;  
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";
document.write(arr.length); 
// 연관배열은 Array객체가 아니므로 length프로퍼티의 값이 0임.


// 문자열을 배열처럼 접근하기
var str = "안녕하세요!";
document.write(str.charAt(2));
document.write(str[2]);

var str = "안녕하세요!"
str[0] = ""; // 자바스크립트의 문자열은 읽기 전용
             // 이 문장은 오류를 발생시킵니다.


// 바자스크립트에서 벼열 여부 확인
var arr = [1,true,"JavaScript"];
document.write(typeof arr); // object

// 1. Array.isArray() 
document.write(Array.isArray(arr))
// 2. instanceof 연산자
document.write(123 instanceof Array);
// 3. constructor 프로퍼티
function Array() {[native code]} 
// toString() indexOf("Array") // 앙 몰랑



