namespace soal{
    let num1 : number = 42;
    let num2 :number = 27;
    let num3 : number = 18;

    let sav :number;
    if(num1>num2){
        sav = num1
        num1= num2
        num2 = sav
    }
    if(num2>num3){
        sav = num2
        num2= num3
        num3 = sav
    }
    if(num1>num2){
        sav = num1
        num1= num2
        num2 = sav
    }
    console.log(num1,num2,num3)
}