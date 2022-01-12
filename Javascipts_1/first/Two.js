// 기본타입-> 원시타입(primirive type)
Number
String
Boolean
Symbol
undefined
null
Object
typeof

// 심볼(symbol) -> 익스플로러에서 지원하지 않습니다.
var sym = Symbol("javascript");
var symObj = Object(sym);

// undefined VS null
// null은 아직 '값'이 정해지지 않은 것을 의미
// undefined란 '타입'이 정해지지 않은 것을 의미

var dog = {name: '해피', age:3}; //객체의 생성
// 객체의 프로퍼티 참조
document.getElementById("result").innerHTML = 
"강아지의 이름은" + dog.name + "이고, 나이는" + dog.age + "살 입니다."


//        타입 변환 (type conversion) -> 타입의 값을 다시 대입이 가능하다.
// 묵시적 타입 변환 (implicit type conversion) -> 자동으로 타입을 변환하여 사용 가능

// 명시적 타입 변환(explicit type conversion)
Number()
String()
Boolean()
Object()
parselnt()   // 이거는 모르겠음
parseFloat() // 이것도 모르겠음
// 이 두가지는 문자열을 숫자로 변환 시켜주는 것

// 숫자를 문자열로 변환
toExponential() // 정수는 1자리, 소수부분은 e표기법을 사용하여 
                // 숫자를 문자열로 변환
toFixed() // 소수 부분을 입력받은 수만큼 숫자를 문자열로 변환함.
toPrecision() // 입력받은 수 만큼 유효 자릿수를 사용하여 숫자를 문자열로 변환함.


// 메소드란 객체의 프로퍼트 값으로 함수를 갖는 프로퍼티를 의미함
// 숫자 객체의 메소드는 js Number 메소드 수업에서 확인 가능.

// 정리 형 변환
// 1. 숫자를 문자열로 변환 
// 2. 불리언 값을 문자열로 변환 
// 3. 날짜를 문자열이나 숫자로 변환 
// 4. 문자열을 숫자로 변환 
// 5. 불리언 값을 숫자로 변환