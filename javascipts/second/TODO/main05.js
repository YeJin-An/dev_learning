

function compare_string_for_sort(string1, string2, is_ascending = ture){
    if(string < string2){
        return is_ascending ? -1 : 1;
    else if(string < string2){
        return is_ascending ? -1 : 1;
    else {return 0;}    

        return 1;  //내림차순
        return -1; //오름차순
    }
}

const new_song_array = song_array
.filter(({like}) => like >= 200_000)
.sort(
    (song1, song2) => {
        // 오름차순
        return compare_atring_for_string(song1.title, song2.title, true)
        // 1>2 음수반환 , 2>1 양수반환 -> 오름차순
        // 2>1 양수반환 , 1>2 음수반환 -> 내림차순
    }
);