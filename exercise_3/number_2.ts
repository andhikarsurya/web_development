namespace soal{
    let text:string = "gg";
    let output = true;
    for (let index = 0; index < text.length; index++) {
        if(text.length===1){
            break;
        }
        if(text[index]!==text[text.length-index-1]){
            output = false;
        }
    }
    console.log(output ===true ?"Palindrome":"not palindrome")
}