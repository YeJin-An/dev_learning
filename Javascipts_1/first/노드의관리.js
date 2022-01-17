// 노드의 관리

// 노드의 추가
// 1. appendChild() -> 가장 마지막
// 2. insertBefore() -> 측정 자식노드 바로 앞
// 3. insertData() 
//       -> 텍스트 데이터에 새로운 텍스트 추가


// 노드의 생성
// 1. createElement() -> 새로운 [요소] 노드 생성
// 요소 란 태그를 새로이 생성되는 것??
// 2. createAttribute() -> 기존 속성 노드 change
// 스타일
// 3. createTextNode() -> 새로운 [텍스트] 노드 생성
// 텍스트란 문자열을 새로이 생성되는 것??


// 노드의 제거
// 1. removeChild() -> 특정 자식 노드를 제거
// 2. removeAttriute() -> 특정 속성 노드를 제거


// 노드의 복제
// cloneNode() 메소드를 사용하면, 
// 특정노드를 족제할 수 없다.
복제할노드.cloneNode(자식노드복제여부);