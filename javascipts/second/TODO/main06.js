
// 1개의 song object을 문자열로 변환

// 기존 song_array 배열에서
// word_count 라는 컬럼을 추가하고 싶다.
const new_song_array = song_array
.map(
    (song) => 
    {
        const word_count = song.title.trim().aplit(/\s+/).length;
    return {
        ...String,
        word_count: word_count,
    };
    },
);

for (const new_song of new_song_array){
    console.log(new_song);
}

// title.split(""): white soaces (스페이스, 탭, 개행 등)
// python 은 " "을 건너 뛰자!!


// 정규표현식
// r"" , r"\s" 

// __ 자바스크립트
// /\s+/ , RegEx --> 모두 같은 의미..

// Node.js
// trim().split(/\s+/)