function bmi(weight:number,height:number){
let output :number = weight/(height*height)
if(output<18.5){
    return("less weight")
}else if(output<=24.9){
    return("ideal")
}else if(output<=29.9){
    return("overweight")
}else if (output<=39.9){
    return("very overweight")
}else{
    return("obesity")
}
}
console.log(bmi(50,1.5))