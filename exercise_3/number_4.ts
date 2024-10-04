// namespace soal_a{
//     let num:number = 10000;
//     console.log(`Rp.${num.toLocaleString()},00`)
// }

namespace soal_b{
    let num:number = 1000;
    let format = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(num);
console.log(format);
}

// namespace soal_c{
// let num = 10000;
// let numStr = num.toString();
// let format = numStr.slice(-3);
// if (numStr.length > 3) {
//     format = numStr.slice(0, -3) + '.' + format;
// }
// let finalnum = "Rp." + format + ",00";
// console.log(num);
// }