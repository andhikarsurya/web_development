namespace soal{
    let text:string = "An apple a day keeps the doctor away";
    let output:string ="";
    for (let index = 0; index < text.length; index++) {
        if(text[index]==='A'||text[index]==='a'){
            output += "*";
        }else{
            output += text[index];
        }
        
    }
    console.log(output)
}