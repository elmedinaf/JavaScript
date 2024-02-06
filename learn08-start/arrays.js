function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    document.getElementById("name").innerHTML = "Elmedina Fejzulai";

    // Create an array called months that holds all the months of the year
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    // use the index to print the month May from the months array the may paragraph
    document.getElementById("may").innerHTML = "Month of May: " + months[4];


    // print the length of the month array to the length paragraph
    document.getElementById("length").innerHTML = "Number of Months: " + months.length;


    // Loop through all of the months array and print each month to the months paragraph
    var monthsText = "";
    for (var i = 0; i < months.length; i++) {
        monthsText += months[i] + "<br>";
    }
    document.getElementById("months").innerHTML = "All Months: " + monthsText;

    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp


    // convert the months array to a string and print to the string paragraph
    document.getElementById("string").innerHTML = "Months as String: " + months.toString();


    // create two new arrays - weekends and weekdays, add the appropriate days to each
    var weekends = ["Saturday", "Sunday"];
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


    // join the two arrays into a new array - week
    var week = weekdays.concat(weekends);


    // print the contents of week to the week paragraph
    document.getElementById("week").innerHTML = "Weekdays and Weekends: " + week.join(", ");


    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    var poppedElement = week.pop();
    document.getElementById("pop").innerHTML = "Popped Element: " + poppedElement + "<br>Updated Week: " + week.join(", ");


    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    var fruits = ["Apple", "Kiwi", "Mango"];
    fruits.push("Banana", "Orange");
    document.getElementById("fruits").innerHTML = "Fruits: " + fruits.join(", ");


    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits.unshift("Grapes");
    document.getElementById("fruits2").innerHTML = "Updated Fruits: " + fruits.join(", ");

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"]
        // sort the array languages and print to the paragraph sorted
        // reverse the array languages and print to the paragraph reversed
        var languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"];
        document.getElementById("sorted").innerHTML = "Sorted Languages: " + languages.sort().join(", ");
        document.getElementById("reversed").innerHTML = "Reversed Languages: " + languages.reverse().join(", ");

    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9]
    var numbers = [42, 23, 21, 50, 20, 6, 31, 9];
    document.getElementById("num-sorted").innerHTML = "Sorted Numbers: " + numbers.sort(function(a, b) { return a - b; }).join(", ");

    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}