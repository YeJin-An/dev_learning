// 객체의 생성

// 1. literal notation
var kitty = {
  name: "나비",
  family: "코리안 숏 헤어",
  age: 1,
  weight: 0.1,
};
document.write(kitty.name + kitty.family);

// 2. 생성자 함수(constructor function)
var day = new Date(); // Date 탕비의 객체를 생성
document.write(day.getFullYear());
// JS에서 제공하는 생성자 혹은 사용자가 직접 객체 생성자 함수

// 3. Object.create() 메소드
var obj = Object.create(null, {
  x: { value: 100, enumeerable: true },
  y: { value: 200, enumerable: true },
});
obj.x;
obj.y;
Object.getPrototypeOf(obj);
