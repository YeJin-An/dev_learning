// 객체(Object)
var arr = new Cat();
// 프로퍼티(ProPerty)
Cat.name = "나비";
Cat.family = "코리아 숏 헤어";
Cat.age = 0.1;
Cat.weight = 300;
// 메소드(Method)
Cat.mew();
Cat.eat();
Cat.sleep();
Cat.play();
// 각 프로퍼티의 값은 인스턴스 마다 전부 다를 것이다.

// 자바스크립트 객체
// JS의 data type는 객체(Object)

// 객체란? name 과 value으로 구성된 property의 정렬되지 않은 집합
var cat = "나비";
var kitty = { name: "나비", family: "코리아 숏 헤어", age: 1, weight: 0.1 };
cat;
kitty;

// 자바스크립트는 숫자, 문자열 불리언, undefined 타입을 제외한 모든 것
// 윕시타입은 값이 정해진 객체로 취급되어 샛체로서의 특징도 가짐.

// 객체의 프로퍼티 참조
var person = {
  name: "홍길동",
  birthday: "030219",
  pld: "1234567",
  fullid: function () {
    return this.birthday + this.pld;
  },
};
person.name; // 객체의 프로퍼티 참조
person["name"]; // 객체의 프로퍼티 참조

// 객체의 메소드 참조
person.fullid();
person.fullid;

// 메소드를 참조할 때, ()이거 안하면, 프로퍼티 그 자체를 참조
person.fullid(); // 이거 말하는 것
// 괄호를 사용하지 않으면, 프로퍼티를 참조하게 되어,
//                        해당 메소드의 정의 자체가 반환됨
person.fullid; //이거 말하는 것
