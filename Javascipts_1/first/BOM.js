// 브라우저 객체 모델(BOM)

// 브라우저의 정보에 접근하거나,
// 브라우저의 여러기능들을 제어할 수 있다.
// 이때 사용하는 객체 모델이 [ BOM,Browser Object Model ]

// BOM은 브라우저의 기능적인 요소들을 직접 제어하고 관리가능
// BOM 모델의 객체들을 전역 객체(global object)로 사용 가능.

// 1. Window객체
// -> 윈도우를 나타내는 객체, 웹 즈라우저에서 지원
// -> JS의 모든객체, 전역함수[메소드], 전역변수[프로퍼티]
// -> 문서 객체 모델(DOM)의 요소들도 모두 window 객체의 프로퍼티

// 기본 문법
window.innerHeight;
window.innerWidth;

// navigation toolbar -> location bar ->
// titlebar -> tab bar -> command system icons ->
// menubar -> bookmarks toolbar

// 브라우저 새 창 열기 , 브라우저 창 닫기

// window객체중 중요한 프로퍼티 중 하나는 document 객체
// document객체는 브라우저 창에 표시되는 문서를 나타내는 객체

// 2. Location객체
// URL 주소    -> location.href
// 호스트이름  -> location.hostname
// 파일 경로명 -> location.pathname
// 현재 창에 문서 불러오기
//  -> assign() replace() reload()

// 3. History객체
// -> 브라우저의 해스토리 정보를 문서 상태 목록으로 저장하는 객체
// -> JS는 개인 벙보를 위해 객체 접근하는 방법을 일부 제한한다.

// 히스토리 개수 -> history.length
// 히스토리 접근 -> window.history.back()
//               -> window.history.forward()
//               -> window.history.go()

// 4. Screem객체
// -> 사용자의 디스플레이 화면에 대한 다양한 정보를 저장하는 객체

//      screen.width , screen.height
// window.outerWidth , window.outerHeight
// screen.availWidth , screen.availHeight
// screen.colorDepth , screen.pixelDepth // 서로 같음.

// 5. Navigator객체
// -> 공금자 및 버진 정보 등을 브라우저에 대한
//    다양한 정보를 저장하는 객체

// 브라우저 스니핑(browser sniffing)
// -> 브라우저 간의 호환성 유지

// navigator.appName , navigator.appCodeName
// navigator.appVersion, navigator.userAgent
// navigator.platform
// navigator.language
// navigator.javaEnabled
// navigator.cookieEnabled
