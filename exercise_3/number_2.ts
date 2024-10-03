namespace soal{
    let text:string = "333";
    let output = true;
    for (let index = 0; index < text.length; index++) {
        if(text[index]!==text[text.length-index-1]){
            output = false;
        }
    }
    console.log(output)
}