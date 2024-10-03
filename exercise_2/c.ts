let _i = 5;

// for (let index = 0; index <= _i; index++) {
//     let zzz= '';
//     for (let _index = 0; _index < index; _index++) {
//         zzz+="*";
//     }
//     console.log(zzz);


// for (let i = 0; i < _i; i++) {
//     let a = ' '.repeat(i);
//     let b = '*'.repeat(_i - i);
//     console.log(a + b);
// }

// for (let index = 1; index <_i; index++) {
//     let space = ' '.repeat(_i-index-1)
//     let a = '*'.repeat(index+index-1)
//     console.log(space+a)
// }

for (let index = 1; index <= _i; index++) {
    let a = ' '.repeat(_i-index)
    let b = '*'.repeat(index)
    console.log(a+b)

}