// 노드(Node)
// HTML DOM은 node라는 계층적 단위에 정보를 저장하고 있음.
//            그들 사이의 관계를 설멍하고, 정의를 해준다.

// 노드 트리(node tree) -> 문서의정보를 계층적 구조에 저장
//          노드들의 잡합이며, 노드 간의 관계를 보여준다.
//  최상위 레벨인 루트 노드(root node)-> text node 까지 존재.

// 정리
// JS는 HTML DOM을 이용하여 노드 트리에 속한 모든 노드에 접근가능.

// 노드 간의 관계
// html(root node) => body,head(자식노드) {서로 형제노드}

/*
루트 노드(root node) -> 최상위
부모 노드(parent node) -> 루트 아래
자식 노드(child node) -> 모든 요수 노드
형제 노드(sibling node) -> 부모 노드를 가지는 모든 노드
조상 노드(ancestor node) -> 현재 노드보다 
                            상위에 존재하는 모든 노드
자손 노드(descendant node) -> 현재 노드보다
                            하위에 존재하는 모든 노드
*/

// 노드 접근
// 1. getElementsByTagName() 매소드를 이용하는 방법
var selectedltem = document.getElementsByTagName("...");

// 2. 노드 간의 관계를 이용하여 접근하는 방법
// 1. parentNode 2. childNodes 3. firstChild
// 4. lastChild 5. nextSibling 6. previousSibling

// 노드에 대한 정보
// 다음과 같은 프로퍼트를 통해 접근할 수 있음.
// 1. nodeName 2. nodeValue 3. nodeType
// 인터페이스를 이용하지 않아도, 노드의 정보에 직접 접근가능

// 1. 문서노드, 요소노드, 속성노드, 텍스트 노드
// 2. 요소노드, 속성노드, 텍스트노드
// 3. 요소노드, 속성노드, 텍스트노드, 주석노드, 문서노드
