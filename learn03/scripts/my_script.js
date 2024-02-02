// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name = "Beba";
    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    var firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07;
    //fix the errors
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 30 - 10
    document.getElementById("subtraction").innerHTML = "30 - 10 = " + subtraction;
    let multiplication = 5 * 5
    document.getElementById("multiplication").innerHTML = "5 * 5 = " + multiplication;
    let division = 20 / 2
    document.getElementById("division").innerHTML = "20 / 2 = " + division;
    let exponent = 2 ** 3;
    document.getElementById("exponent").innerHTML = "2 ** 3 = " + exponent;
    let modulus = 20 % 3;
    document.getElementById("modulus").innerHTML = "20 % 3 = " + modulus;
    let increment = 5;
    increment++;
    document.getElementById("increment").innerHTML = "Increment of 5 = " + increment;
    let decrement = 8;
    decrement--;
    document.getElementById("decrement").innerHTML = "Decrement of 8 = " + decrement;
}


function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10  =" + "x = " + x;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1  " + "x = " + x;
    x -= 5;
    document.getElementById("minus_equals").innerHTML = "x -= 5  => x = " + x;
    x *= 2;
    document.getElementById("times_equals").innerHTML = "x *= 2  => x = " + x;
    x /= 3;
    document.getElementById("divide_equals").innerHTML = "x /= 3  => x = " + x;
    x %= 4;
    document.getElementById("modulus_equals").innerHTML = "x %= 4  => x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const candy = ["Skittles", "Laffy Taffy", "Haribo"];
    const Milkshake = { brand: "Nesquik", flavor: "Strawberry" };

    const objectString = "Brand: " + Milkshake.brand + ", Flavor: " + Milkshake.flavor;
    document.getElementById("object").innerHTML = objectString;
    document.getElementById("array").innerHTML = candy;
}

