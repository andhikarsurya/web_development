const n: number = 29; // The number to check
let isPrime: boolean = true;

if (n <= 1) {
    isPrime = false; // Numbers less than or equal to 1 are not prime
} else if (n <= 3) {
    isPrime = true; // 2 and 3 are prime numbers
} else if (n % 2 === 0 || n % 3 === 0) {
    isPrime = false; // Exclude multiples of 2 and 3
} else {
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            isPrime = false; // Found a divisor, so n is not prime
            break; // Exit the loop if a divisor is found
        }
    }
}

if (isPrime) {
    console.log(`${n} is a prime number.`);
} else {
    console.log(`${n} is not a prime number.`);
}
