/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const myList = ["Mean Girls", "John Tucker Must Die", "Sleepover", "How to Lose a Guy in 10 Days", "Hot Chicks"];
const listParagraph = document.getElementById("list");
myList.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listParagraph.appendChild(listItem);
});




/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const set1 = new Set(["Girls Just Wanna Have Fun", "Time After Time", "7 Rings", "Man's World", "Froot"]);
const set1Paragraph = document.getElementById("set1");
const set2Paragraph = document.getElementById("set2");

set1Paragraph.textContent = "Set 1: ";
set1.forEach(song => {
    set1Paragraph.textContent += `${song}, `;
});


// add two more songs to the set then display in the set2 paragraph
set1.add("Art Deco");
set1.add("Barbie Tingz");

set2Paragraph.textContent = "Set 2: ";
set1.forEach(song => {
    set2Paragraph.textContent += `${song}, `;
});





/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const map1 = new Map([
    ["Yllza", "yllzaf@gmail.com"],
    ["Zana", "zanaelizabeth@yahoo.com"],
    ["Mackenzie", "mackenziegray@gmail.com"],
    ["Kadime", "kadimemusta@aol.com"],
    ["Armin", "arminbilalli@gmail.com"]
]);

const map1Paragraph = document.getElementById("map1");
const map2Paragraph = document.getElementById("map2");
const map3Paragraph = document.getElementById("map3");

map1Paragraph.textContent = "Map 1: ";
map1.forEach((email, name) => {
    map1Paragraph.textContent += `${name} - ${email}, `;
});


// add two new names and emails and display in map2 use the forEach() method
map1.set("Sabina", "sabinavahiti@gmail.com");
map1.set("Alejna", "alejnamm@gmail.com");

map2Paragraph.textContent = "Map 2: ";
map1.forEach((email, name) => {
    map2Paragraph.textContent += `${name} - ${email}, `;
});


// get and display the email of one person, display in map3

const person3Email = map1.get("Mackenzie");
        map3Paragraph.textContent = `Map 3: Email of Person3 - ${person3Email}`;
