//random hex color color generateor
//write a function randomHexColor that generates a random hexadecimal color code each time it is called.The function shuld return a string represwenting the random color code in the format  'RRGGBB',WHERE RR,GG and BB are two digi hexadecimal numbers representing the red ,reen and blue components of color ,repectively.

const randomHexColor=()=>{
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(randomHexColor())