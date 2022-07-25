// To set two dates to two variables
var date_Birthday = new Date("07/14/2022");
var date_Todays_date = new Date();

// To calculate the time difference of the two dates
var Difference_In_Time = date_Todays_date.getTime() - date_Birthday.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

var Difference_In_Years = Math.ceil(Difference_In_Days) / 365;
//To display the final no. of days (result)
document.getElementById("age").innerHTML =
  Difference_In_Years.toFixed(2) +
  " Years old" +
  " (Thats " +
  Math.ceil(Difference_In_Days) +
  " days old)";
