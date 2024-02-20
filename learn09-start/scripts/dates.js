/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
var basicDate = new Date();
document.getElementById("basic").innerHTML = basicDate;



// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
var todayDate = new Date();
var todayInfo = todayDate.getFullYear() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getDate();
document.getElementById("today").innerHTML = todayInfo;



// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
var birthdayString = "1994-11-21";
var birthdayDate = new Date(birthdayString);
document.getElementById("birthday").innerHTML = birthdayDate;




// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
var isoDateString = basicDate.toISOString();
document.getElementById("iso").innerHTML = isoDateString;


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
var dateFormat1 = todayDate.toDateString();
var dateFormat2 = todayDate.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
var dateFormat3 = todayDate.toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' });

document.getElementById("date1").innerHTML = dateFormat1;
document.getElementById("date2").innerHTML = dateFormat2;
document.getElementById("date3").innerHTML = dateFormat3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = "Day of the Month: " + todayDate.getDate();
document.getElementById("get2").innerHTML = "Day of the Week: " + todayDate.getDay();
document.getElementById("get3").innerHTML = "Month: " + (todayDate.getMonth() + 1);
document.getElementById("get4").innerHTML = "Year: " + todayDate.getFullYear();



// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
todayDate.setFullYear(2025);
document.getElementById("set1").innerHTML = "Set Year to 2025: " + todayDate.toDateString();

todayDate.setMonth(5);
document.getElementById("set2").innerHTML = "Set Month to June: " + todayDate.toDateString();

todayDate.setDate(20);
document.getElementById("set3").innerHTML = "Set Day to 20: " + todayDate.toDateString();

todayDate.setHours(15);
document.getElementById("set4").innerHTML = "Set Hours to 15: " + todayDate.toDateString();
