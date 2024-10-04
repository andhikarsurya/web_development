namespace soal{
    let text:string ="The QuiCk BrOwN Fox"
    let output :string = ""
    for (let index = 0; index < text.length; index++) {
       if(text[index]===text[index].toUpperCase()){
        output += text[index].toLowerCase();
       }else{
        output += text[index].toUpperCase();
       }
        
    }
    console.log(output)
}
