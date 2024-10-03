const firstDate = new Date("2022-01-20");
const secondDate = new Date("2022-01-22");
const timeDifference = firstDate.getTime() - secondDate.getTime();
const millisecondsInADay = 1000 * 60 * 60 * 24;
console.log(Math.abs(timeDifference / millisecondsInADay));