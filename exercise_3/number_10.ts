namespace soal{
    let input = 123;
    let num :number=0;
    let text:string="";
    
    if(typeof(input)===typeof(text)){
        console.log(1)
    }else if(typeof(input)===typeof(num)){
        console.log(2)
    }else{
        console.log(3)
    }
}