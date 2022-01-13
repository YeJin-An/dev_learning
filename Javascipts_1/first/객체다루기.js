// this Keyword

// this는 자바스크립트 코드 영역을
// 포함하고 있는 개체를 가리킨다.

// this키워드는 객체 그 자신을 가리킨다.
// this는 사용자가 임의로 가리키는 값을 바꿀 수 없음

// 정리
// this키워드는 어떠한 값도 가지지 않으며,
// 단순히 새로운 객체로 대체됨

// 객체 프로퍼티의 삭제
delete 객체이름.프로터티이름;


// 객체 프로퍼티의 순회
function Dog(color, name, age){
  this.color = color,
  this.name = name,
  this.age = age,
}
var myDog = new Dog("흰색","마루",1);

// 조건 지정
Object.defineProperty(mydog, 'color',{enumerable:false});

// 1. Object.keys() 
//    -> 열거할 수 있는 프로퍼티 담는다.
document.write(Object.keys(myDog)+"<br>")
// 2. Object.getOwnPropertyNames() 
//    -> 객체가 가진 모든 고유 프로퍼티
document.write(ObjectgetOwnPropertyNames(myDog)+"<br>")
// 3. for / in


// 객체간의 비교
// 두 객체의 프로퍼티가 같아도, 두 객체는 별개의 객체이므로
var herDog = hisDog; // 이란 대입을 해주면??
// 객체 레퍼런스(object reference) 이고 객체를 가리킨다
// 이것은 객체가 위치한 주소를 저장하는 것이므로

// 대입을 안할경우 동등연산자, 일치연산자에서 FALSE
// 대입을 한  경우 동등션산자, 일치연산자에서 TRUE

