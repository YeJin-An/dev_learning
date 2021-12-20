
// 객체
const tom = {
    "name":"Tom",
    "age": 10, // age : 10 [Ok]
    ["ag"+"e"]:10, // 이렇게 사용하자
    [age]:10,
}

console.log(tom);

// 단축 속성명

const name = "Tom";
const age = 10;

const tom1 = {
    "name":name,
    age:age,
    local,
    // 모두 같은 의미
    print: function(){
        //console.log(this.name,this.age);
        
        // Template Literals : 여러 줄을 지원
        console.log(`안녕. 난 ${name}이야.
${age}이지`);
    }
}

tom1.print();

// slef , this-> 현재의 인스턴스
// 클래스 => 인스턴스

