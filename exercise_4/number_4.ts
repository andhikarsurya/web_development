function odd(input:number[]){
    let out = new Array()
for (let index = 0; index < input.length; index++) {
    if(input[index]%2==0){
        out.push(input[index]);
    }
}
return out;
}
let arr = new Array(1,2,3,4,5,6,7,8,9,10)

console.log(odd(arr));