let _days = 400;
let _year:number,_month,_day :number;
_year = Math.floor(_days/365);
_month = Math.floor(Math.floor(_days%365)/30);
_day = Math.floor(Math.floor(_days%365)%30)
console.log(`${_year} year, ${_month} month, ${_day} day`);