// object

/*  인덱스를 이용해서 데이터를 가져오게 되는 것
    만일 인덱스로 문자를 사용하고자 하면 객체(dictionary)
    [연관 배열] -> map , Dictionary */


// create object
var grades = {'egoing':10, 'k8805':6, 'sorialgi':80};

var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

var grades = new Object();
grades['egoing'] =10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;


var grades = {'egoing':10, 'k8805':6, 'sorialgi':80};
alert(grades['sorialgi']);

alert(grades.sorialgi);



var grades = {'egiong':10, 'k8805':6, 'sorialgi':80};
for(key in grades){
    document.write('key: '+key+"value :"+grades[key]+"<br />");
}

// 객체 지향 프로그래밍
var grades = {
    'list':{'egoing':10, 'k8805':6, 'sorialgi':80},
    'show':function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
}
grades.show();
// 변수 안에 사전이 있고, 데이터는 복수고, 데이터에 함수가 있어
// 호출할 때, 키값을 반환할 것이다.
