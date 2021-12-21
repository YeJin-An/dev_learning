// npm install readline-syns

const {question} = require("readline-Syns");

animal_names = [
    'frog',
    "wolf",
    "love",
    "hello",
    "yensl",
    "dkssud",
];

// const animal_names = snimal_names
//     .map((name)=> {
//         return{
//             name,
//             value:Math.random(),
//         }})
//     .sort((obj_a,obj_b) => {
//         return obj_a.value - obj_b.value;
//     })
//     .map( obj => {
//         return obj.value;
//     })

const shuffled_names = snimal_names
    .map((name)=> {
        return{
            name,
            value:Math.random(),
        }})
    .sort((obj_a,obj_b) => {
        return obj_a.value - obj_b.value;
    })
    .map( ({name}) => name);

const begin_time = new Date().getTime() / 1000 ;
const ok_counter = 0;

for(const shuffle_names of shuffled_animal_names.slice(0,5)){
    const line = question(`${snimal_name} >>>`);
    if(line === snimal_name){
        ok_counter ++;
    }
}

const end_time = new Date().getTime()

const time = end_time - begin_time;
console.log(`총 ${parseInt(time)}초가 소요되었습니다.`);