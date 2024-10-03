// namespace soal{
//     let text : string = "Hello World";
//     let search : string = "ell";
//     console.log(text.replace(search,''))
// }
namespace soal_2 {
    let text: string = "Hello World ell World";
    let search: string = "ell";
    let output: string = "";

    const index = text.indexOf(search);
    if (index !== -1) {
        output = text.slice(0, index) + text.slice(index + search.length);
        console.log(index)
    } else {
        output = text;
    }
    console.log(output);
}
