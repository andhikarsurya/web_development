// let number3 :number = 3;
// let output : number =0;
// for (let index = number3; index > 0; index--) {
//     output += index;
// }
// console.log(output);

let number3 :number = 10;
let output : number =0;
let text :string = "";
for (let index = 1; index <= number3; index++) {
    output += index;
    if(index!=number3){
        text += `${index} + `;
    }else{
        text += `${index} `
    }
    
}
console.log(text+"= "+output);