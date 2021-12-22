// TODO: #3 좋아요수 top10을 출력
// 내림차순 정렬 후 -> 처음 10개
// 오름차순 정렬 후 -> 마지막 10개 -> 뒤집기.

const { melon_data: song_array } = require("./melon_data");

const like_top10 = song_array
. sort((song1, song2) => song2.like - song1.like,
)
.slice(10);

for(const [index, {like, title, artist}] of like_top10.entries()){
    console.log(`${index+1} [${like}] ${title} ${artist}`)
}

    // for(const {like, title, artist} ) 이면, song 생략 가능.
