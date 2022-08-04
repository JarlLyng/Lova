// To set two dates to two variables
const date_Birthday = new Date("07/14/2022");
const date_Todays_date = new Date();

// To calculate the time difference of the two dates
let Difference_In_Time = date_Todays_date.getTime() - date_Birthday.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// To calculate the years
let Difference_In_Years = Math.ceil(Difference_In_Days) / 365;

//To display the final no. of days (result)
document.getElementById("age").innerHTML =
  "is " +
  Difference_In_Years.toFixed(2) +
  " Years old" +
  " (Thats " +
  Math.ceil(Difference_In_Days) +
  " days old)";
