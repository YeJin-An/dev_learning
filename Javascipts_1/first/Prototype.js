// 상속(inheritance)

// 기존 클래스의 모든 프로퍼티와 메소드를 사용할 수 있는 것
// 그러면, 요구에 맞게 재사용 가능
// 추상화, 캡슐화 
// -> 객체 지향 프로그래밍을 구성하는 특징 중 하나


// 프로토타입(prototype)
// JS는 프로토타입이라는 객체를 가지고 있음.
// 모든 객체는 프로퍼티와 메소드를 상속받음.

// 정리
// 최소 하나이상의 객체로 부터 상속을 받고,
//  정보를 제공하는 객체를 prototype이라고 한다.

// 프로토타입 체인(prototype chain)
var obj = new Object() // Object.prototype
var arr = new Array() // Array.prototype
var date = new Date() // Date.prototype

// 단. Object는 아무런 프로퍼티도 상속받지 않습니다.
// 단, Date는 JS에 내장되어있는 객체 이므로 Date, Object 가능


// prototype create
function Dog(color, name,age){
  this.color = color,
  this.name = name,
  this.age=age,
}
var myDog = new Dog('흰색','마루',1)
document.write(myDog.name + myDog.color)
// 함수 Dog으로 부터 myDog이 받음.