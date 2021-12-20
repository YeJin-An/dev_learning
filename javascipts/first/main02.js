// 객체 복사

const obj1 = {"value1":10, "p-1":20, };

obj1["value1"]
obj1.value1

obj1["p-1"]
// obj1.p-1 이거는 안된다.

//     [python] => indexError, KeyError 
// [javascipts] => no error, undefined 값 없음, null 값은 있음.

// 지정 속성이 없으면 underfined를 반환
console.log(obj1.name);

/// js에서는 함수가 아무런 값도 리턴하지 않으면 undrfined를 반환
function fn() {}
console.log(fn());


const obj2 = {value1: 10};
const obj3 = obj2; // 얕은 복사


// 직렬화 => 전송할 수 있는 상태,,
const json_string = JSON.stringify(obj2)
const obj3 = Json.parse(json_string);

obj2.value1 += 1 ;

// 깊은 복사하는 방법 중의 하나. 깊은 복사를 지원하는 다양한 JS 라이브러리가 있습니다.
// 아래 방법은 가장 무식한 방법이다.
console.log(obj2); // 얕은
console.log(obj3); // 복사