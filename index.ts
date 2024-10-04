// namespace a{
//     let text:string="anjay gan"
//     let search = "jay"
//     let zzz = text.indexOf(search)
//     console.log(text.slice(2+search.length))
// }
/*
function split(input:string){
let out = new Array()
let str : string = "";
let word = (input[0]!=' ')
for (let index = 0; index < input.length; index++) {
    word = input[index]!= ' ';
    if(word){
        str += input[index];
    }
    if(input[index]!= ' '){
        word=false;
        out.push(str);
    }
}
return(out);
}
console.log(split("hi there  awokaow"))
*/

// let arr = new Array(0,3,6,2,34,5,32,1,4,6)
// arr.sort((a,b)=>a-b).reverse()
// // arr = arr.filter((item)=>item%2==0)
// arr.forEach(element => {
//     console.log(element)
// });
// let ary = new Array(arr.map((item)=>item+99))
// console.log(ary)

// const avengers = ['thor', 'captain america', 'hulk'];
// avengers.forEach((item, index)=>{
// 	console.log(index, item)
// })

function multiplier (factor :number){
    return function(num:number){
        return factor *num
    }
}
const mul = multiplier(3)

console.log(mul(2))
console.log(multiplier(3)(2))