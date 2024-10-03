namespace soal{
    let text:string = "hello world awkaowka";
    let output : string = "";
    for (let index = 0; index < text.length; index++) {
        if(index==0){
            output += text[index].toLocaleUpperCase();
        }else if(text[index-1]=== ' '){
            output += text[index].toLocaleUpperCase();
        }else{
            output += text[index]
        }
    }
    console.log(output)
}