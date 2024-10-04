// function trianglePattern(height :number) {
//     let num = 1;
//     for (let i = 1; i <= height; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//             row += num.toString().padStart(2, '0') + ' ';  // Ensure 2 digits with leading zeros
//             num++;
//         }
//         console.log(row.trim());  // Print the row and remove the trailing space
//     }
// }    
// // Example usage:
// trianglePattern(4);
function triangle(height:number){
    for(let i = 1; i<=height;i++){
        let res: string = ""
        res += " ".repeat(height-i)
        for (let j = 1; j <= i;j++){
            res += `${j} `
        }
        console.log(res)
    }
}
triangle(3)

// let height = 20;
// let num = 1;
// for (let i = 1; i <= height; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += num.toString().padStart(2, '0') + ' ';  
//         num++;
//     }
//     console.log(row);
// }