function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Elmedina Fejzulai"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    var resultAdd = 5 + "10";
    document.getElementById("add").innerHTML = "Add Result: " + resultAdd;
   


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    var numToString = 123;
    document.getElementById("to-string").innerHTML = "toString Result: " + numToString.toString();


    // Demonstrate the use of toExponential() and print to the exponent paragraph
    var numToExponential = 12345;
    document.getElementById("exponent").innerHTML = "toExponential Result: " + numToExponential.toExponential();


    // Demonstrate the use of toFixed() and print to the fixed paragraph
    var numToFixed = 9.654;
    document.getElementById("fixed").innerHTML = "toFixed Result: " + numToFixed.toFixed(2);


    // Demonstrate the use of toPrecision() and print to the precision paragraph
    var numToPrecision = 98765;
    document.getElementById("precision").innerHTML = "toPrecision Result: " + numToPrecision.toPrecision(3);


    // Demonstrate the use of parseFloat() and print to the float paragraph
    var stringToFloat = "3.14";
    document.getElementById("float").innerHTML = "parseFloat Result: " + parseFloat(stringToFloat);


    // Demonstrate the use of parseInt() and print to the int paragraph
    var stringToInt = "10";
    document.getElementById("int").innerHTML = "parseInt Result: " + parseInt(stringToInt);



    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    /*The equality operator (==) performs type coercion, the strict equality operator (===) checks both value and type without performing type coercion.
  */
    var equalsExplanation = "The difference between == and === in JavaScript: == performs type coercion, === does not";
    document.getElementById("equals").innerHTML = equalsExplanation;

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    var logicExplanation = "Logical AND (&&) has higher precedence than Logical OR (||).";
    document.getElementById("logic").innerHTML = logicExplanation;



    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    var day = new Date().getDay();
    var dayName;

    switch (day) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown";
    }

    document.getElementById("switch").innerHTML = "Today is " + dayName;


    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var age = 20;
    var status = (age >= 18) ? "Adult" : "Minor";
    document.getElementById("ternary").innerHTML = "Status: " + status;

}