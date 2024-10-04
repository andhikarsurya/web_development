function zzz(num:number){
    let str :string ="";
    for (let index = 1; index <= num; index++) {
        if(index %3 ===0 && index %5 ===0){
            str += "FizzBuzz";
        }else if(index %3 ===0){
            str += "Fizz";
        }else if(index %5 ===0){
            str += "Buzz";
        }else{
            str += index.toString();
        }
        if(index!=num){
            str+=", ";
        }
        
        
    }
    console.log(str);
}
zzz(15)