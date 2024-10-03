let fib : number = 15;
let var1 = 0, var2 = 1, next = 0;
for (let index = 0; index < fib; index++) {
    next = var1 +var2;
    var1 = var2;
    var2 = next;
}
console.log(var1);