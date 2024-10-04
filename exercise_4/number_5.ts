// function split(input:string){
// let out = new Array()
// let str : string = "";
// for (let index = 0; index < input.length; index++) {
//     if(input[index]!= ' '){
//         str += input[index];
//     }else if(input[index]== ' ' && str.length > 0){
//         out.push(str)
//         str = "";
//     }
// }
// if (str.length > 0) {
//     out.push(str);
// }
// return(out); 
// }
function split(input: string) {
    let out = input.split(/\s+/);
    out = out.filter(e => e !== ''); 
    return out;
}

console.log(split(" aowkoawk aowkaowk  aowkoawkao  "));

