function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    var roundParagraph = document.getElementById("round");
    var ceilParagraph = document.getElementById("ceil");
    var floorParagraph = document.getElementById("floor");
    var truncParagraph = document.getElementById("trunc");
    var signParagraph = document.getElementById("sign");
    var powParagraph = document.getElementById("pow");
    var minParagraph = document.getElementById("min");
    var randomParagraph = document.getElementById("random");

    var numberToRound = 5.678;

    roundParagraph.innerHTML = "Original Number: " + numberToRound + "<br>";
    roundParagraph.innerHTML += "Round: " + Math.round(numberToRound) + "<br>";
    


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    var random2Paragraph = document.getElementById("random2");
    var randomInteger = Math.floor(Math.random() * 100) + 1;
    random2Paragraph.innerHTML = "Random Integer (1-100): " + randomInteger + "<br>";
   


    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    var comparisonsParagraph = document.getElementById("comparisons");
    var numString = "5";
    var num = 5;

    comparisonsParagraph.innerHTML = "(==) a string and number can both be equal, flexible " + (numString == num) + "<br>" +
    "(===): type and value has to be equal " + (numString === num) + "<br>";


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}
